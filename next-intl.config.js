// next-intl.config.js  (or .ts)
module.exports = {
  /**
   * All locales your site will serve.
   * Add more later (eg. 'es', 'de') when you translate content.
   */
  locales: ["en"],

  /**
   * Locale that will be used when visiting
   * a non‑prefixed route ( /about instead of /en/about ).
   */
  defaultLocale: "en",

  /**
   * Optional. If true, next‑intl redirects / to the user's
   * browser language. Most portfolio sites leave this false.
   */
  localeDetection: false,
  localePrefix: "as-needed",
};
