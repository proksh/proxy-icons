/** @type {import('next').NextConfig} */
// const nextConfig = {};
// module.exports = nextConfig;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['next-mdx-remote'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};

export default nextConfig;
