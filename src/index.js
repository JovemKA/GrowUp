(async () => {

    const database = require('./db');
    const Usuário = require('./Repositorio/usuario');
    await database.sync();
})();

















/*const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes");

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/teste", (req, res) => res
.status(200)
.send({mensagem: 'boas-vindas à API'}))


app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app */
