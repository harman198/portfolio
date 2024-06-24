import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import compress from "astro-compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.harmankhangura.com",
  integrations: [
    tailwind(),
    icon({
      include: {
        tabler: ['*']
      }
    }),
    compress(),
    sitemap()]
});