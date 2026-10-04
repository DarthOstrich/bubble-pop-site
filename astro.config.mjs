// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://bubblepop.digitalnutt.com",
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		imageService: "passthrough",
	}),
	session: false,
	vite: {
		plugins: [tailwindcss()],
	},
});
