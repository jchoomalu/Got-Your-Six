import express from 'express'
import classifiedsController from '../controllers/classifieds-controller.js'

//all routes for classifieds page
const router = express.Router()
router.route('/local/classifieds/:state')
.get(classifiedsController.listByState)
.post(classifiedsController.newPost)

router.route('/local/classifieds/:state/:id')
.delete(classifiedsController.deletePost)
export default router