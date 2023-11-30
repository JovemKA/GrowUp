const Sequelize = require('sequelize');
const database = require('../db');
const Usuário = require('./usuario');

const Gasto = database.define('gasto', {
    idGasto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DECIMAL(20, 2),
        allowNull: false
    },
    dataGasto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlRecibo: Sequelize.STRING,
    dataRegistro: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})

Gasto.belongsTo(Usuário, {
    constraint: true,
    foreignKey: 'idUsuario'
})

Usuário.hasMany(Gasto, {
    foreignKey: 'idUsuario'
})

module.exports = Gasto;