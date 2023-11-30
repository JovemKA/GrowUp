const Sequelize = require("sequelize");
const database = require("../db");

const categoriaGastos = database.define("categoriaGastos", {
    idCategoriaGastos: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = categoriaGastos;
