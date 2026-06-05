import { defineConfig } from 'astro/config';

export default defineConfig({
  // Public URL of your site – important for correct links and SEO
  site: 'https://alexandermathai.com',

  // Generate a fully static site (HTML/CSS/JS only), ideal for GitHub Pages
  output: 'static',

  // Optional: adjust if you later serve from a subpath; for now leave root
  base: '/',

  // You can add integrations (e.g., sitemap, MDX) here later
  integrations: [],
});
