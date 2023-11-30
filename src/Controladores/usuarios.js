const { getTodosUsuarios, getUsuarioPorId,addUsuario, editaUsuario, deletaUsuarioId } = require("../Serviços/usuarios")

function getUsuarios(req,res){
    try {
        const usuarios = getTodosUsuarios()
        res.send(usuarios)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function getUsuario(req,res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const usuario = getUsuarioPorId(id)
            res.send(usuario)
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

 function postUsuario(req, res){
    try {
        const usuarioNovo = req.body
        if (req.body.nome && req.body.id) {
            addCarro(usuarioNovoNovo)
        res.status(201)
        res.send("Usuario adicionado com sucesso")
        } else {
            res.status(422)
            res.send("Você precisa preencher todos os campos")
        }
        
    } catch (error) {
        res.status(500)
        res.status(error.message)
    }
}

function patchUsuario(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            editaUsuario(body, id)
            res.send("Carro modificado com sucesso")
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteUsuario(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            deletaUsuarioId(id)
            res.send("Usuario deletado com sucesso")
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
        
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}


 module.exports ={
    getUsuarios,
    getUsuario,
    postUsuario,
    patchUsuario,
    deleteUsuario
    
 }