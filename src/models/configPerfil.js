const Sequelize = require('sequelize');
const database = require('../db');
const Perfil = require('./perfil');

const ConfigPerfil = database.define('configPerfil', {
    idConfig: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    notificacao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    permissoes: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

ConfigPerfil.belongsTo(Perfil, {
    constraint: true,
    foreignKey: 'idPerfil'
})

ConfigPerfil.hasOne(Perfil, {
    foreignKey: 'idPerfil'
})

module.exports = ConfigPerfil;