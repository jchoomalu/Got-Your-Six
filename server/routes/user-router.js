import express from 'express'
import userController from '../controllers/user-controller.js'

//user router non auth
const router = express.Router()
router.route('/users/list')
.get(userController.findAll)

router.route('/users/:id')
.get(userController.findOne)
.delete(userController.removeOne)



export default router