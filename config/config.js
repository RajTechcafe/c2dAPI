const dbConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,

    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
};
module.exports = dbConfig;