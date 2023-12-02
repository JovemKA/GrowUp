const {Router} = require("express")
const {getNotificacao,postNotificacao, getNotificacao, putNotificacao, deleteNotificacao} = require("../Controladores/notificacoes")
const router = Router()

router.get('/', getNotificacoes)
router.get('/:id', getNotificacao)
router.post('/', postNotificacao)
router.put('/:id', putNotificacao)
router.delete('/:id', deleteNotificacao)


module.exports = router