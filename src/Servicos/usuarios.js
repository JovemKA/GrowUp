const { Sequelize } = require("sequelize");
const Usuario = require("../Repositorio/usuario");

//  Buscar todos os Usuários
async function getTodosUsuarios() {
      const usuarios = await Usuario.findAll();
      return usuarios;
  }  

// Buscar Usuário por id  
async function getUsuarioPorId(id) {
      const usuario = await Usuario.findByPk(id)
      return usuario
  }


/* FUNÇÃO Inserir Usuário

  async function postUsuario() {
    const Usuario = await User.create({ nome: "Andrey", email: "andreykrf@gmail.com", senha: "260603", telefone: "996653425", dataNascimento: "26/06/2003", rg: "123", orgaoEmissor: "sds", cpf: "123", estadoCivil: "solteiro", profissao: "operador", cep: "52110-002", endereco: "Avenida", dataRegistro: "30/11/2023", ativo: true});
    return Usuario;
}
*/

// console.log("Jane's auto-generated ID:", Usuario.id);

// Atualizar dados do Usuário
async function putUsuario(id, novosDados) {
        const usuario = await Usuario.findByPk(id)
        await usuario.update(novosDados)
        console.log('Usuário atualizado com sucesso:', usuario)
        return usuario
}

// "Deletar" Usuário, alterar status para Inativo
async function deleteUsuario(id) {
    const usuario = await Usuario.findByPk(id)
    await usuario.update({ativo: false})
    console.log('Usuário atualizado com sucesso:', usuario)
    return usuario
}

// Função para "Restaurar" Usuário?
/* (async function deleteUsuario(id) {
    const usuario = await Usuario.findByPk(id)
    await usuario.update({ativo: true})
    console.log('Usuário atualizado com sucesso:', usuario)
    return usuario
}
*/
