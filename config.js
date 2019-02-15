module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000,
    URL: process.env.BASE_URL || 'http://localhost:5000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://tex:123456a@ds133865.mlab.com:33865/cliente_api',
    JWT_SECRET: process.env.JWT_SECRET || 'secret1'
}