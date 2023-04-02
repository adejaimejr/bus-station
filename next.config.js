/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/bus-station' : '',
  publicRuntimeConfig: {
      contextPath: process.env.NODE_ENV === 'production' ? '/bus-station' : '',
      uploadPath: process.env.NODE_ENV === 'production' ? '/bus-station/upload.php' : '/api/upload'
  }
}

module.exports = nextConfig
