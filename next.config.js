/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    // Enable modern CSS features
    optimizePackageImports: ['@heroicons/react', 'framer-motion'],
    // Enable CSS optimization
    optimizeCss: true,

    // Enable server components
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  // Enable webpack optimizations
  webpack: (config, { isServer, dev }) => {
    // Add custom webpack configurations here
    if (!dev && !isServer) {
      // Enable production optimizations
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    // Add support for loading SVG files as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // Enable static export for static site generation
  output: 'export',
  // Configure base path if needed (e.g., for GitHub Pages)
  // basePath: '/your-repo-name',
  // Configure asset prefix if needed
  // assetPrefix: '/your-repo-name/',
};

module.exports = nextConfig;
