/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NUM_BACKWARDS: process.env.NUM_BACKWARDS,
    EMAIL_BACKWARDS: process.env.EMAIL_BACKWARDS,
  }
}

module.exports = nextConfig
