const {Router} = require("express")
const {getGastos,postGastos, getGastos, patchGastos, deleteGastos} = require("../Controladores/gastos")
const router = Router()

router.get('/', getGastos)
router.get('/:id', getGastos)
router.post('/', postGastos)
router.patch('/:id', patchGastos)
router.delete('/:id', deleteGastos)


module.exports = router