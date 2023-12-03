const { or } = require("sequelize");
const { Notificacao } = require("../Repositorio/notificacoes"); // Importe o modelo do Sequelize para o notificação

async function getNotificacoes(req, res) {
  try {
    const notificacoes = await Notificacao.findAll(); // Encontra todos os notificações no banco de dados
    res.send(notificacoes);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getNotificacao(req, res) {
  try {
    const id = req.params.id;
    const notificacao = await Notificacao.findByPk(id); // Encontra o notificação pelo ID no banco de dados

    if (!notificacao) {
      res.status(404).send("notificação não encontrado");
      return;
    }

    res.send(notificacao);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postNotificacao(req, res) {
  try {
    const { id, tipo, dataHora, conteudo } = req.body;

    if (
      !id ||
      !tipo ||
      !dataHora ||
      !conteudo
    ) {
      res.status(422).send("Você precisa preencher todos os campos");
      return;
    }

    const novoNotificacao = await Notificacao.create({
      id,
      tipo,
      dataHora,
      conteudo,
    }); // Cria um novo notificação no banco de dados
    res.status(201).send("notificação adicionado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function putNotificacao(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    const notificacao = await Notificacao.findByPk(id);

    if (!notificacao) {
      res.status(404).send("notificação não encontrado");
      return;
    }

    await notificacao.update(body); // Atualiza as informações do notificação no banco de dados
    res.send("notificação modificado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteNotificacao(req, res) {
  try {
    const id = req.params.id;
    const notificacao = await Notificacao.findByPk(id);

    if (!notificacao) {
      res.status(404).send("notificação não encontrado");
      return;
    }

    await notificacao.destroy(); // Deleta o notificação do banco de dados
    res.send("notificação deletado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getNotificacoes,
  getNotificacao,
  postNotificacao,
  putNotificacao,
  deleteNotificacao,
};
