const Sequelize = require("sequelize");
const database = require("../db");

const Usuario = database.define("usuario", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dataNascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  rg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  orgaoEmissor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estadoCivil: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  profissao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dataRegistro: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Usuario;
