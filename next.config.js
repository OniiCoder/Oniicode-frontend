// next.config.js
module.exports = {
    transpilePackages: ['lucide-react'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/heyset/**',
            },
        ],
    },
};