const {Router} = require("express")
const {getUsuario,postUsuario, getUsuario, putUsuario, deleteUsuario} = require("../Controladores/usuarios")
const router = Router()

router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.post('/', postUsuario)
router.put('/:id', putUsuario)



module.exports = router