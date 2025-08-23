/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Performance optimizations
    optimizeCss: false, // Disable to avoid build issues
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Mobile-first image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [320, 375, 414, 768, 1024, 1200, 1920], // Mobile-first sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Better image optimization
    unoptimized: false,
    loader: 'default',
  },

  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  generateEtags: false, // Reduce ETag generation overhead

  // Performance headers for mobile
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Add missing Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://region2.google-analytics.com https://region3.google-analytics.com https://region4.google-analytics.com https://region5.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://region2.google-analytics.com https://region3.google-analytics.com https://region4.google-analytics.com https://region5.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';",
          },
          // Mobile performance headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      // CSS and JS optimization
      {
        source: '/(.*).css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/mehrwertsteuer-rechner',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bmi-rechner',
        destination: '/',
        permanent: true,
      },
      {
        source: '/kredit-rechner',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mwst-rechner',
        destination: '/',
        permanent: true,
      },
      {
        source: '/steuerrechner',
        destination: '/',
        permanent: true,
      },
      // Fix 4xx errors - redirect old calculator URLs
      {
        source: '/loan-calculator',
        destination: '/#loan',
        permanent: true,
      },
      {
        source: '/bmi-calculator',
        destination: '/#bmi',
        permanent: true,
      },
      {
        source: '/vat-calculator',
        destination: '/#vat',
        permanent: true,
      },
    ]
  },

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }

    return config
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Trailing slash for better SEO
  trailingSlash: false,
}

module.exports = nextConfig
