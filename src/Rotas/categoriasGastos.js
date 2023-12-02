const {Router} = require("express")
const {getCategoriasGastos,postCategoriaGastos, getCategoriaGastos, putCategoriaGastos, deleteCategoriaGastos} = require("../Controladores/categoriaGastos")
const router = Router()

router.get('/', getCategoriasGastos)
router.get('/:id', getCategoriaGastos)
router.post('/', postCategoriaGastos)
router.put('/:id', putCategoriaGastos)
router.delete('/:id', deleteCategoriaGastos)


module.exports = router