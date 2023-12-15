const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require('./config.js')[env];

const sequelize = new Sequelize(
    config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        },
        port: 3306
    }
)

module.exports = sequelize;