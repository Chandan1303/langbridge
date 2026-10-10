import { useCallback, useEffect, useRef } from "react";

export function useTTS(language) {
    const activePlayback = useRef(null);

    useEffect(() => () => {
        const playback = activePlayback.current;
        playback?.controller.abort();
        playback?.audio.pause();
        if (playback?.url) URL.revokeObjectURL(playback.url);
    }, []);

    const speak = useCallback(async (text, onStatus) => {
        const previousPlayback = activePlayback.current;
        previousPlayback?.controller.abort();
        previousPlayback?.audio.pause();
        if (previousPlayback?.url) URL.revokeObjectURL(previousPlayback.url);

        const controller = new AbortController();
        const playback = { controller, audio: null, url: null };
        activePlayback.current = playback;
        onStatus?.(`Preparing accurate ${language} pronunciation…`);

        try {
            const response = await fetch("/api/tts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text, language }),
                signal: controller.signal,
            });

            if (!response.ok) {
                const result = await response.json().catch(() => ({}));
                throw new Error(result.error || `Speech service returned HTTP ${response.status}.`);
            }

            const audioBlob = await response.blob();
            if (activePlayback.current !== playback) return;

            playback.url = URL.createObjectURL(audioBlob);
            playback.audio = new Audio(playback.url);
            playback.audio.onended = () => {
                if (activePlayback.current !== playback) return;
                URL.revokeObjectURL(playback.url);
                activePlayback.current = null;
                onStatus?.("");
            };
            playback.audio.onerror = () => {
                if (activePlayback.current !== playback) return;
                URL.revokeObjectURL(playback.url);
                activePlayback.current = null;
                onStatus?.("The generated audio could not be played by this browser.");
            };

            await playback.audio.play();
            if (activePlayback.current === playback) {
                onStatus?.(`Playing accurate ${language} pronunciation.`);
            }
        } catch (error) {
            if (controller.signal.aborted || activePlayback.current !== playback) return;
            activePlayback.current = null;
            onStatus?.(error instanceof Error ? error.message : "Could not generate speech audio.");
        }
    }, [language]);

    return speak;
}
