const {Router} = require("express")
const {getMetasFinanceiras,postMetaFinanceira, getMetaFinanceira, patchMetaFinanceira, deleteMetaFinanceira} = require("../Controladores/metasFinanceiras")
const router = Router()

router.get('/', getMetasFinanceiras)
router.get('/:id', getMetaFinanceira)
router.post('/', postMetaFinanceira)
router.patch('/:id', patchMetaFinanceira)
router.delete('/:id', deleteMetaFinanceira)


module.exports = router