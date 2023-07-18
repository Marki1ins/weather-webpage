/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagsapi.com", "openweathermap.org"],
  },
  env: {
    API_KEY: process.env.API_KEY,
    UNSPLASH_KEY: process.env.UNSPLASH_KEY,
  },
};

module.exports = nextConfig;
