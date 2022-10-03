/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'images.blush.design',
      "images.pexels.com",
      'www.HOSTNAME.com', //hostname of the img url
    ]
  }
}