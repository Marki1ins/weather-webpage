/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagsapi.com", "openweathermap.org"],
  },
  env: {
    API_KEY: process.env.API_KEY,
    UNLEASH_KEY: process.env.UNLEASH_KEY,
  },
};

module.exports = nextConfig;
