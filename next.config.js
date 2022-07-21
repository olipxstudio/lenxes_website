/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // experimental: {
    //     images: {
    //         layoutRaw: true,
    //         allowFutureImage: true
    //     }
    // },
    images: {
        domains: ["localhost"],
    },
    env: {
        SERVER_HOST: isProd
            ? "https://server_live_endpoint/"
            : "http://localhost:4000/api/v1/",
        NEXT_URL: isProd ? "https://lenxis.com" : "http://localhost:3000/api",
    },
    // custom headers
    async headers() {
        return [
            {
                // source is
                source: "/:path*",
                headers: [
                    {
                        key: "Authorization",
                        value: `Bearer token` || "no token",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
