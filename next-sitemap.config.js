/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  // Absolute production URL (no trailing slash)
  siteUrl: "https://cstannahill-software-dev.vercel.app",

  // Generates /sitemap.xml and /robots.txt during `postbuild`
  generateRobotsTxt: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  // Next‑intl adds /en, /es, etc. — expose them as <xhtml:link alternates>
  alternateRefs: [
    { hrefLang: "en", href: "https://cstannahill-software-dev.vercel.app/en" },
    {
      hrefLang: "x-default",
      href: "https://cstannahill-software-dev.vercel.app",
    },
  ],

  // Keep each sitemap under 5 000 URLs, auto‑paginate if you add blog posts later
  sitemapSize: 5000,

  // Exclude internal or throw‑away routes
  exclude: ["/api/*", "/draft/*", "/server-sitemap.xml"],

  // Append any server‑side sitemap you create at runtime
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://cstannahill-software-dev.vercel.app/server-sitemap.xml",
    ],
  },
};
