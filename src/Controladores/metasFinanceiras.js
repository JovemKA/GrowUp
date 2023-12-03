const { or } = require("sequelize");
const { MetaFinanceira } = require("../Repositorio/metaFinanceira"); // Importe o modelo do Sequelize para a meta financeira

async function getMetasFinanceiras(req, res) {
  try {
    const metasFinanceiras = await MetaFinanceira.findAll(); // Encontra todas as metas financeiras no banco de dados
    res.send(metasFinanceiras);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getMetaFinanceira(req, res) {
  try {
    const id = req.params.id;
    const metaFinanceira = await MetaFinanceira.findByPk(id); // Encontra a meta financeira pelo ID no banco de dados

    if (!metaFinanceira) {
      res.status(404).send("Meta financeira não encontrada");
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

    if (!id || !titulo || !valor || !dataVencimento || !progresso) {
      res.status(422).send("Você precisa preencher todos os campos");
      return;
    }

    const novaMetaFinanceira = await MetaFinanceira.create({
      id,
      titulo,
      valor,
      dataVencimento,
      progresso,
    }); // Cria um nova meta financeira no banco de dados
    res.status(201).send("Meta financeira adicionada com sucesso");
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
      res.status(404).send("Meta financeira não encontrada");
      return;
    }

    await metaFinanceira.update(body); // Atualiza as informações da meta financeira no banco de dados
    res.send("Meta financeira modificada com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteMetaFinanceira(req, res) {
  try {
    const id = req.params.id;
    const metaFinanceira = await MetaFinanceira.findByPk(id);

    if (!metaFinanceira) {
      res.status(404).send("Meta financeira não encontrada");
      return;
    }

    await metaFinanceira.destroy(); // Deleta a meta financeira do banco de dados
    res.send("Meta financeira deletada com sucesso");
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
