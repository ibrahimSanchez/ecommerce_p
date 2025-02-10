/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Agrega el dominio de Cloudinary aquí
  },
    output: "export"
};

module.exports = nextConfig;
