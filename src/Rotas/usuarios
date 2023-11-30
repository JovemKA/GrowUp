const {Router} = require("express")
const {getUsuario,postUsuario, getUsuario, patchUsuario, deleteUsuario} = require("../Controladores/usuarios")
const router = Router()

router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.post('/', postUsuario)
router.patch('/:id', patchUsuario)
router.delete('/:id', deleteUsuario)


module.exports = router