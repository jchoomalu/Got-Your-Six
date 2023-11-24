import express from 'express'
import newsEventsController from '../controllers/news-events-controller.js'
import News from '../models/news.model.js'

const router = express.Router()
router.route('/info/news/:query')
.get(newsEventsController.findAll(News))

router.route('/info/news/article/:id')
.get(newsEventsController.findOne(News))
.post(newsEventsController.updateComment(News))
.put(newsEventsController.likeComment(News))

router.route('/info/news/:like/:id')
.put(newsEventsController.updateOne(News))


export default router