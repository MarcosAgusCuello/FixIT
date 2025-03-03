// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const SERVER_PORT = 3000;
//the url to acces your blog during local development
const LOCALHOST_URL = `https://localhost:${SERVER_PORT}`;
//the url to access your blog after deploying it somewhere (eg. Netlify)
const LIVE_URL = "https://FixIT.github.io";
// this is the astro command your npm scripts runs
const SCRIPT = import.meta.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
//when you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}


// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT},
  site: BASE_URL,
    vite: {
        plugins: [tailwindcss()],
      },
});
