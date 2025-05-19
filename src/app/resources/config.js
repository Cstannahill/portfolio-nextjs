const baseURL = "https://cstannahill-software-dev.vercel.app/";

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
  locales: ["en"], // A list of all locales that are supported, e.g. ['en','id']
  defaultLocale: "en", // Locale used by default and as a fallback
};

const routes = {
  "/": true,
  "/readme": true,
  "/work": true,
  "/blog": true,
  "/gallery": false,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": false,
};

const effects = {
  mask: "cursor", // none | cursor | topLeft | topRight | bottomLeft | bottomRight
  gradient: {
    display: true,
    opacity: 0.1, // 0 - 1
  },
  dots: {
    display: false,
    opacity: 0.4, // 0 - 1
    size: "24", // 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 634
  },
  lines: {
    display: false,
  },
};

// Make this mutable so we can update it from client components
const style = {
  theme: "dark", // dark | light
  neutral: "sand", // sand | gray | slate
  brand: "yellow", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "yellow", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "plastic", // flat | plastic
  border: "conservative", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
};

const display = {
  location: true,
  time: true,
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: "topRight", // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
      display: true,
      opacity: 0.6, // 0 - 1
    },
    dots: {
      display: false,
    },
    lines: {
      display: false,
    },
  },
};

export {
  routes,
  protectedRoutes,
  effects,
  style,
  display,
  mailchimp,
  baseURL,
  i18n,
  i18nOptions,
};
