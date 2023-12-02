const {Router} = require("express")
const {getMetasFinanceiras,postMetaFinanceira, getMetaFinanceira, putMetaFinanceira, deleteMetaFinanceira} = require("../Controladores/metasFinanceiras")
const router = Router()

router.get('/', getMetasFinanceiras)
router.get('/:id', getMetaFinanceira)
router.post('/', postMetaFinanceira)
router.put('/:id', putMetaFinanceira)
router.delete('/:id', deleteMetaFinanceira)


module.exports = router