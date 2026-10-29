/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,
    devIndicators: false, // <-- Add this line
};
module.exports = nextConfig;