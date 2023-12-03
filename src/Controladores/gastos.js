const { or } = require("sequelize");
const { Gasto } = require("../Repositorio/gasto"); // Importe o modelo do Sequelize para o gasto

async function getGastos(req, res) {
  try {
    const gastos = await Gasto.findAll(); // Encontra todos os gastos no banco de dados
    res.send(gastos);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getGasto(req, res) {
  try {
    const id = req.params.id;
    const gasto = await Gasto.findByPk(id); // Encontra o gasto pelo ID no banco de dados

    if (!gasto) {
      res.status(404).send("gasto não encontrado");
      return;
    }

    res.send(gasto);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postGasto(req, res) {
  try {
    const { id, categoria, descricao, valor, dataGasto, dataRegistro } =
      req.body;

    if (
      !id ||
      !categoria ||
      !descricao ||
      !valor ||
      !dataGasto ||
      !dataRegistro
    ) {
      res.status(422).send("Você precisa preencher todos os campos");
      return;
    }

    const novoGasto = await Gasto.create({
      id,
      categoria,
      descricao,
      valor,
      dataGasto,
      dataRegistro,
    }); // Cria um novo gasto no banco de dados
    res.status(201).send("gasto adicionado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function putGasto(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    const gasto = await Gasto.findByPk(id);

    if (!gasto) {
      res.status(404).send("gasto não encontrado");
      return;
    }

    await gasto.update(body); // Atualiza as informações do gasto no banco de dados
    res.send("gasto modificado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteGasto(req, res) {
  try {
    const id = req.params.id;
    const gasto = await Gasto.findByPk(id);

    if (!gasto) {
      res.status(404).send("gasto não encontrado");
      return;
    }

    await gasto.destroy(); // Deleta o gasto do banco de dados
    res.send("gasto deletado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getGastos,
  getGasto,
  postGasto,
  putGasto,
  deleteGasto,
};
