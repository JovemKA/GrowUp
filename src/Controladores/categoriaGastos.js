const { or } = require("sequelize");
const { CategoriaGastos } = require("../Repositorio/categoriaGastos"); // Importe o modelo do Sequelize para a categoria de gastos

async function getCategoriasGastos(req, res) {
  try {
    const categoriasGastos = await CategoriaGastos.findAll(); // Encontra todas as categorias de gastos no banco de dados
    res.send(categoriasGastos);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getCategoriaGastos(req, res) {
  try {
    const id = req.params.id;
    const categoriaGastos = await CategoriaGastos.findByPk(id); // Encontra a categoria de gastos pelo ID no banco de dados

    if (!categoriaGastos) {
      res.status(404).send("categoria de gastos não encontrada");
      return;
    }

    res.send(categoriaGastos);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postCategoriaGastos(req, res) {
  try {
    const { id, nome } = req.body;

    if (!id || !nome) {
      res.status(422).send("Você precisa preencher todos os campos");
      return;
    }

    const novaCategoriaGastos = await CategoriaGastos.create({
      id,
      nome,
    }); // Cria uma nova categoria de gastos no banco de dados
    res.status(201).send("categoria de gastos adicionada com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function putCategoriaGastos(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    const categoriaGastos = await CategoriaGastos.findByPk(id);

    if (!categoriaGastos) {
      res.status(404).send("categoria de gastos não encontrada");
      return;
    }

    await categoriaGastos.update(body); // Atualiza as informações da categoria de gastos no banco de dados
    res.send("categoria de gastos modificada com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteCategoriaGastos(req, res) {
  try {
    const id = req.params.id;
    const categoriaGastos = await CategoriaGastos.findByPk(id);

    if (!categoriaGastos) {
      res.status(404).send("categoria de gastos não encontrada");
      return;
    }

    await categoriaGastos.destroy(); // Deleta a categoria de gastos do banco de dados
    res.send("categoria de gastos deletado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getCategoriasGastos,
  getCategoriaGastos,
  postCategoriaGastos,
  putCategoriaGastos,
  deleteCategoriaGastos,
};
