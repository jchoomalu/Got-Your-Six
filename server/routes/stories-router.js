import express from 'express'
import {findAll, findOne, updateOne, updateComment, createOne, likeComment, deleteOne} from '../controllers/news-events-controller.js'
import Stories from '../models/stories.model.js'

const router = express.Router()
router.route('/info/stories/:query')
.get(findAll(Stories))
.post(createOne(Stories))

router.route('/info/stories/article/:id')
.get(findOne(Stories))
.post(updateComment(Stories))
.put(likeComment(Stories))

router.route('/info/stories/:like/:id')
.put(updateOne(Stories))

router.route('/info/stories/delete/:id')
.delete(deleteOne(Stories))



export default router