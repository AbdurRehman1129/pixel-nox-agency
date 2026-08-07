/**
 * Tailwind v4 postcss config. If your existing postcss.config.mjs lists
 * "tailwindcss" and "autoprefixer" as separate plugins (the v3 pattern),
 * replace it with this — v4 ships its own PostCSS plugin package and
 * autoprefixing is handled internally.
 */
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
