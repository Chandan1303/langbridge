import "dotenv/config";
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const distDirectory = join(projectRoot, "dist");
const apiOnly = process.argv.includes("--api-only");
const port = Number(process.env.PORT || (apiOnly ? 3001 : 4173));
const languageCodes = new Map([
    ["kn-IN", "Kannada"],
    ["te-IN", "Telugu"],
    ["hi-IN", "Hindi"],
    ["ta-IN", "Tamil"],
    ["ml-IN", "Malayalam"],
]);
const languageTags = new Map([
    ["Kannada", "kn-IN"],
    ["Telugu", "te-IN"],
    ["Hindi", "hi-IN"],
    ["Tamil", "ta-IN"],
    ["Malayalam", "ml-IN"],
]);
const mimeTypes = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".ico": "image/x-icon",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
};

function sendJson(response, statusCode, payload) {
    response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify(payload));
}

async function readJsonBody(request) {
    const chunks = [];
    let size = 0;

    for await (const chunk of request) {
        size += chunk.length;
        if (size > 10_000) {
            const error = new Error("Request body is too large.");
            error.statusCode = 413;
            throw error;
        }
        chunks.push(chunk);
    }

    try {
        return JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch {
        const error = new Error("Request body must be valid JSON.");
        error.statusCode = 400;
        throw error;
    }
}

async function handleSpeech(request, response) {
    if (request.method !== "POST") {
        response.setHeader("Allow", "POST");
        sendJson(response, 405, { error: "Use POST to request speech audio." });
        return;
    }

    if (!process.env.GOOGLE_CLOUD_TTS_API_KEY) {
        sendJson(response, 503, {
            error: "Speech service is not configured. Add GOOGLE_CLOUD_TTS_API_KEY to the server's .env file.",
        });
        return;
    }

    let payload;
    try {
        payload = await readJsonBody(request);
    } catch (error) {
        sendJson(response, error.statusCode || 400, { error: error.message });
        return;
    }

    const text = typeof payload.text === "string" ? payload.text.trim() : "";
    const languageCode = typeof payload.language === "string"
        ? languageTags.get(payload.language)
        : undefined;

    if (!text || text.length > 1000) {
        sendJson(response, 400, { error: "Text is required and must be no longer than 1,000 characters." });
        return;
    }

    if (!languageCode || !languageCodes.has(languageCode)) {
        sendJson(response, 400, { error: "The selected language is not supported for speech." });
        return;
    }

    let googleResponse;
    try {
        googleResponse = await fetch(
            `https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(process.env.GOOGLE_CLOUD_TTS_API_KEY)}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    input: { text },
                    voice: { languageCode },
                    audioConfig: { audioEncoding: "MP3" },
                }),
                signal: AbortSignal.timeout(20_000),
            },
        );
    } catch (error) {
        console.error("Google Cloud TTS request failed:", error);
        sendJson(response, 502, { error: "Could not connect to the speech service. Please try again." });
        return;
    }

    if (!googleResponse.ok) {
        const providerError = await googleResponse.json().catch(() => ({}));
        const providerMessage = providerError.error?.message;
        console.error("Google Cloud TTS returned an error:", providerMessage || googleResponse.status);
        sendJson(response, 502, {
            error: providerMessage || "The speech service could not generate audio. Check the API key and enabled API.",
        });
        return;
    }

    const result = await googleResponse.json();
    if (typeof result.audioContent !== "string" || !result.audioContent) {
        sendJson(response, 502, { error: "The speech service returned no audio." });
        return;
    }

    response.writeHead(200, {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store",
        "X-Speech-Language": languageCodes.get(languageCode),
    });
    response.end(Buffer.from(result.audioContent, "base64"));
}

function serveStatic(request, response) {
    if (!existsSync(distDirectory)) {
        sendJson(response, 503, { error: "Production assets are missing. Run npm run build first." });
        return;
    }

    const requestPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const relativePath = normalize(requestPath).replace(/^([/\\]|\\.\\.(?:[/\\]|$))+/, "");
    let filePath = join(distDirectory, relativePath);

    if (!filePath.startsWith(distDirectory) || !existsSync(filePath) || !statSync(filePath).isFile()) {
        filePath = join(distDirectory, "index.html");
    }

    response.writeHead(200, {
        "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
    });
    createReadStream(filePath).pipe(response);
}

const server = createServer((request, response) => {
    if (new URL(request.url, "http://localhost").pathname === "/api/tts") {
        handleSpeech(request, response).catch((error) => {
            console.error("Unhandled speech request error:", error);
            if (!response.headersSent) {
                sendJson(response, 500, { error: "An unexpected error prevented speech generation." });
            } else {
                response.destroy(error);
            }
        });
        return;
    }

    if (apiOnly) {
        sendJson(response, 404, { error: "API route not found." });
        return;
    }

    serveStatic(request, response);
});

server.listen(port, () => {
    console.log(`LangBridge ${apiOnly ? "speech API" : "server"} listening on http://localhost:${port}`);
});
