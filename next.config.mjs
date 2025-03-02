import { createMDX } from 'fumadocs-mdx/next';
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
 
initOpenNextCloudflareForDev();

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
