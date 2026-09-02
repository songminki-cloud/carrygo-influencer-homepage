import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/carrygo-influencer-homepage" : undefined,
  assetPrefix: isGithubPages ? "/carrygo-influencer-homepage/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
