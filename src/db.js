const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', '260603', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;