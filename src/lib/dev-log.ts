// src/lib/dev-log.ts
export const devLog = (...args: unknown[]) => {
  if (process.env.NODE_ENV !== "development") return;
  // cyan prefix for visibility
  console.log("\x1b[36m%s\x1b[0m", "[SEO]", ...args);
};
