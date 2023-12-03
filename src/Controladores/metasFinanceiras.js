const { or } = require("sequelize");
const { MetaFinanceira } = require("../Repositorio/metaFinanceira"); // Importe o modelo do Sequelize para o metaFinanceira

async function getMetasFinanceiras(req, res) {
  try {
    const metaFinanceiras = await MetaFinanceira.findAll(); // Encontra todos os metaFinanceiras no banco de dados
    res.send(metaFinanceiras);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getMetaFinanceira(req, res) {
  try {
    const id = req.params.id;
    const metaFinanceira = await MetaFinanceira.findByPk(id); // Encontra o metaFinanceira pelo ID no banco de dados

    if (!metaFinanceira) {
      res.status(404).send("metaFinanceira não encontrado");
      return;
    }

    res.send(metaFinanceira);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postMetaFinanceira(req, res) {
  try {
    const { id, titulo, valor, dataVencimento, progresso } = req.body;

    if (
      !id ||
      !titulo ||
      !valor ||
      !dataVencimento ||
      !progresso
    ) {
      res.status(422).send("Você precisa preencher todos os campos");
      return;
    }

    const novaMetaFinanceira = await MetaFinanceira.create({
      id,
      titulo,
      valor,
      dataVencimento,
      progresso,
    }); // Cria um novo metaFinanceira no banco de dados
    res.status(201).send("metaFinanceira adicionado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function putMetaFinanceira(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    const metaFinanceira = await MetaFinanceira.findByPk(id);

    if (!metaFinanceira) {
      res.status(404).send("metaFinanceira não encontrado");
      return;
    }

    await metaFinanceira.update(body); // Atualiza as informações do metaFinanceira no banco de dados
    res.send("metaFinanceira modificado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteMetaFinanceira(req, res) {
  try {
    const id = req.params.id;
    const metaFinanceira = await MetaFinanceira.findByPk(id);

    if (!metaFinanceira) {
      res.status(404).send("metaFinanceira não encontrado");
      return;
    }

    await metaFinanceira.destroy(); // Deleta o metaFinanceira do banco de dados
    res.send("metaFinanceira deletado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getMetasFinanceiras,
  getMetaFinanceira,
  postMetaFinanceira,
  putMetaFinanceira,
  deleteMetaFinanceira,
};
