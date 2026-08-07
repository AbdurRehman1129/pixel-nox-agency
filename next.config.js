/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['169.254.83.107','192.168.100.9' ,'localhost'],
  
  turbopack: {
    root: process.cwd(),
  },
};

module.exports = nextConfig;