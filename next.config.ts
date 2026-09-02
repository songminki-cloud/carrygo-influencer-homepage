import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/carrygo-influencer-homepage" : undefined,
  assetPrefix: isGithubPages ? "/carrygo-influencer-homepage/" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/carrygo-influencer-homepage" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
