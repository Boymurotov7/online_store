const {Sequelize} = require('sequelize')
const config = require("./config.js")

//console.log(config)

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        protocol: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging:false
    }
    
);

!(async function () {
    try {
        sequelize.authenticate();
        console.log("database connected");
    } catch (error) {
        console.log("error: database not connected");
    }
})();

module.exports = sequelize;