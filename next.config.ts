import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "5001",
                pathname: "/uploads/**",
            },
        ],
    },
    env: {
        DATABASE_URL: process.env.API_DATABASE_URL,
    },
};

export default nextConfig;
