import { defineConfig } from 'astro/config';

export default defineConfig({
  // Public URL of your site – important for correct links and SEO
  site: 'https://alexandermathai.com',

  // Generate a fully static site (HTML/CSS/JS only), ideal for GitHub Pages
  output: 'static',

  // Root path (keep this for a root domain)
  base: '/',

  // Add integrations later as needed (e.g., sitemap, MDX)
  integrations: [],
});
