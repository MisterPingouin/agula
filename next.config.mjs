/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Ne pas échouer le build en cas d’erreurs ESLint
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
