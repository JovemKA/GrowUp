const {Router} = require("express")
const {getUsuario,postUsuario, getUsuarios, putUsuario, deleteUsuario} = require("../Controladores/usuarios")
const router = Router()

router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.post('/', postUsuario)
router.put('/:id', putUsuario)
router.put('/:id', deleteUsuario)

module.exports = router