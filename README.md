# LangBridge

LangBridge is a phrasebook for Kannada, Telugu, Hindi, Tamil, and Malayalam. Browse
common phrases by category and use speech controls to hear them.
Each language also includes a short history and a script guide with vowel and
consonant charts, plus commonly taught additional letters where relevant. The
language guide includes a map highlighting associated Indian states/territories.

## Run locally

Use Node.js 20.19+ or 22.12+ and npm:

```sh
npm install
```

Enable the [Google Cloud Text-to-Speech API](https://console.cloud.google.com/marketplace/product/google/texttospeech.googleapis.com)
for a Google Cloud project, create an API key restricted to that API, and copy
[.env.example](./.env.example) to `.env`. Put the key in `GOOGLE_CLOUD_TTS_API_KEY`
in `.env`; this server-only key is never sent to the browser.

```sh
npm run dev
```

Open the local URL printed by Vite. The speaker sends the selected phrase and
language to Google Cloud Text-to-Speech to generate audio. Google Cloud may
require billing to be enabled and may charge for synthesis.

To build and run the production server:

```sh
npm run build
npm start
```

The production server serves the built app and the speech API on the same port.

Speech playback uses Google Cloud Text-to-Speech for Kannada, Telugu, Hindi,
Tamil, and Malayalam.

## Deploy to Hugging Face Spaces

This app is ready to run in a Hugging Face Space with a Docker deployment.

1. Create a new Space on Hugging Face and choose the `Docker` SDK.
2. Connect the Space to this GitHub repository.
3. In Space settings, add the secret environment variable:
   - `GOOGLE_CLOUD_TTS_API_KEY`
4. Keep the app port exposed as `7860`.
5. The included `Dockerfile` builds the app and starts the production server.

Important: never commit the real API key to the repository. Store it only in the Hugging Face Space secret settings.

## Map data

The state and union-territory outlines are derived from geoBoundaries
India ADM1 (`IND-ADM1-1811400`), with source metadata pointing to
[DataMeet Maps](https://github.com/datameet/maps). The project displays a
simplified SVG rendering of those boundaries. See
[geoBoundaries](https://www.geoboundaries.org/) for dataset details and
attribution/license terms.
