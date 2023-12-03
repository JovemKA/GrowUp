const {Router} = require("express")
const {getGasto, postGasto, getGastos, putGasto, deleteGasto} = require("../Controladores/gastos")
const router = Router()

router.get('/', getGastos)
router.get('/:id', getGasto)
router.post('/', postGasto)
router.put('/:id', putGasto)
router.delete('/:id', deleteGasto)


module.exports = router