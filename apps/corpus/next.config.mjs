import { composePlugins, withNx } from '@nx/next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

export default composePlugins(...plugins)(
  withBundleAnalyzer({
    nx: {
      svgr: false,
    },
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
      serverActions: {
        allowedOrigins: ['localhost:3000'],
      },
    },
  })
);
