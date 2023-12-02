const Sequelize = require("sequelize");
const database = require("../db");
const Usuario = require('./usuario');

const Notificacoes = database.define('notificacoes', {
    idNotificacoes: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataHora: {
        type: Sequelize.DATE,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Notificacoes.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'idUsuario'
})

Usuario.hasMany(Notificacoes, {
    foreignKey: 'idUsuario'
})

module.exports = Notificacoes;