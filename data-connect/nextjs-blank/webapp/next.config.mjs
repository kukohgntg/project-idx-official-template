/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: '/v1beta/projects/:path*',
      destination: 'http://127.0.0.1:9399/v1beta/projects/:path*'
    },
  ],
};

export default nextConfig;
