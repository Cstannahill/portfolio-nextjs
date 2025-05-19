import mdx from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import intlConfig from "./next-intl.config.js"; // ← path to the file above
const withNextIntl = createNextIntlPlugin(intlConfig);
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote", "geist"],
  productionBrowserSourceMaps: true,
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withNextIntl(withMDX(nextConfig));
