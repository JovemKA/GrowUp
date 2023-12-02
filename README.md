# GrowUp

Este repositário utiliza as dependências Express e Sequelize.

# 1º Passo - Iniciar NPM
É necessário criar um banco de dados para poder ser realizada a auntenticação com o sequelize.

Acesse o terminal e execute o seguinte comando para iniciar o NPM e suas depedências.

NPM  init

# 2º Passo - Conexão com Banco de Dados pelo Sequelize

No Arquivo db.js insira os dados do seu banco nos respectivos espaços:

const Sequelize = require('sequelize');
const sequelize = new Sequelize('nome do banco', 'usuario', 'senha do banco', {
    dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    host: 'localhost',
    port: 3306
});

# 3º Passo - Execute o Nodemon para rodar sua Aplicação

Seguinte comando para executar seu Script, através do Nodemon.

npm run dev
