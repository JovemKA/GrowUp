const Sequelize = require("sequelize");
const database = require("../db");
const Usuário = require('./usuario');

const Notificações = database.define('notificacoes', {
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

Notificações.belongsTo(Usuário, {
    constraint: true,
    foreignKey: 'idUsuario'
})

Usuário.hasMany(Notificações, {
    foreignKey: 'idUsuario'
})

module.exports = Notificações;