import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    output: "standalone",
    poweredByHeader: false,
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx"],
    images: {
        formats: ["image/avif", "image/webp"],
    },
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default createMDX({})(nextConfig);
