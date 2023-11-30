const {Router} = require("express")
const {getCategoriasGastos,postCategoriaGastos, getCategoriaGastos, patchCategoriaGastos, deleteCategoriaGastos} = require("../Controladores/categoriaGastos")
const router = Router()

router.get('/', getCategoriasGastos)
router.get('/:id', getCategoriaGastos)
router.post('/', postCategoriaGastos)
router.patch('/:id', patchCategoriaGastos)
router.delete('/:id', deleteCategoriaGastos)


module.exports = router