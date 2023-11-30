const Sequelize = require('sequelize');
const database = require('../db');
const Usuário = require('./usuario');

const Perfil = database.define('perfil', {
    idPerfil: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomePerfil: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagemPerfil: Sequelize.TEXT,
    idiomaPerfil: Sequelize.STRING,
    moedaPerfil: Sequelize.STRING
})

Perfil.belongsTo(Usuário, {
    constraint: true,
    foreignKey: 'idUsuario'
})

Usuário.hasMany(Perfil, {
    foreignKey: 'idUsuario'
})

module.exports = Perfil;