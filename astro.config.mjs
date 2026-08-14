import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

export default defineConfig({
  output: "server",
  site: "https://5.royall-ssd.de",
  adapter: node({ mode: "standalone" }),
  security: {
    checkOrigin: true,
    allowedDomains: [
      { hostname: "royall-ssd.de" },
      { hostname: "www.royall-ssd.de" },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});