const {Router} = require("express")
const {getNotificacao,postNotificacao, getNotificacao, patchNotificacao, deleteNotificacao} = require("../Controladores/notificacoes")
const router = Router()

router.get('/', getNotificacoes)
router.get('/:id', getNotificacao)
router.post('/', postNotificacao)
router.patch('/:id', patchNotificacao)
router.delete('/:id', deleteNotificacao)


module.exports = router