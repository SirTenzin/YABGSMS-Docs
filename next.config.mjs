import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // This is important for Cloudflare Pages
  output: 'export',
  // If you're using images, you'll need to configure them for static export
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
