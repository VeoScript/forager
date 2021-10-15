/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
  }
}
