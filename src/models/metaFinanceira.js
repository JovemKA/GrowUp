    const Sequelize = require('sequelize');
const database = require('../db');
const Usuário = require('./usuario');

const MetaFinanceira = database.require('metaFinanceira', {
    idMetaFinanceira: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DECIMAL(20, 2),
        allowNull: false
    },
    dataVencimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }, 
    progresso: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

MetaFinanceira.belongsTo(Usuário, {
    constraint: true,
    foreignKey: 'idUsuario'
})

Usuário.hasMany(MetaFinanceira, {
    foreignKey: 'idUsuario'
})

module.exports = MetaFinanceira;