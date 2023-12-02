const {Router} = require("express")
const {getGastos,postGastos, getGastos, putGastos, deleteGastos} = require("../Controladores/gastos")
const router = Router()

router.get('/', getGastos)
router.get('/:id', getGastos)
router.post('/', postGastos)
router.put('/:id', putGastos)
router.delete('/:id', deleteGastos)


module.exports = router