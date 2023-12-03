const { or } = require("sequelize");
const { Usuario } = require("../Repositorio/usuario"); // Importe o modelo do Sequelize para o usuário

async function getUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll(); // Encontra todos os usuários no banco de dados
    res.send(usuarios);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getUsuario(req, res) {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id); // Encontra o usuário pelo ID no banco de dados

    if (!usuario) {
      res.status(404).send("Usuário não encontrado");
      return;
    }

    res.send(usuario);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postUsuario(req, res) {
  try {
    const {
      nome,
      id,
      email,
      senha,
      telefone,
      dataNascimento,
      rg,
      orgaoEmissor,
      cpf,
      estadoCivil,
      profissao,
      cep,
      endereco,
      dataRegistro,
      ativo,
    } = req.body;

    if (
      !nome ||
      !id ||
      !email ||
      !senha ||
      !telefone ||
      !dataNascimento ||
      !rg ||
      !orgaoEmissor ||
      !cpf ||
      !estadoCivil ||
      !profissao ||
      !cep ||
      !endereco ||
      !dataRegistro ||
      !ativo
    ) {
      res.status(422).send("Você precisa preencher todos os campos");
      return;
    }

    const novoUsuario = await Usuario.create({
      nome,
      id,
      email,
      senha,
      telefone,
      dataNascimento,
      rg,
      orgaoEmissor,
      cpf,
      estadoCivil,
      profissao,
      cep,
      endereco,
      dataRegistro,
      ativo,
    }); // Cria um novo usuário no banco de dados
    res.status(201).send("Usuário adicionado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function putUsuario(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      res.status(404).send("Usuário não encontrado");
      return;
    }

    await usuario.update(body); // Atualiza as informações do usuário no banco de dados
    res.send("Usuário modificado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteUsuario(req, res) {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      res.status(404).send("Usuário não encontrado");
      return;
    }

    await usuario.update({ ativo: false }); // "Deleta" o usuário do banco de dados (Fake Delete)
    res.send("Usuário deletado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getUsuarios,
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario,
};
