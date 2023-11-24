import express from 'express'
import messageController from '../controllers/messages-controller.js'

const router = express.Router()

//direct messaging between users
router.route('/message/:id')
.post(messageController.sendMessage)
.put(messageController.updateMessage)

router.route('/message/:id/:query')
.get(messageController.queryMessage)

router.route('/message/reply/:msgid')
.post(messageController.replyMessage)

router.route('/message/delete/:id/:msgId')
.delete(messageController.deleteMessage)


export default router
