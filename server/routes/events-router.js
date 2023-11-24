import express from 'express'
import newsEventsController from '../controllers/news-events-controller.js'
import Events from '../models/events.model.js'

const router = express.Router()
router.route('/info/events/:query')
.get(newsEventsController.findAll(Events))

router.route('/info/events/article/:id')
.get(newsEventsController.findOne(Events))
.post(newsEventsController.updateComment(Events))

router.route('/info/events/:attend/:id')
.put(newsEventsController.updateOne(Events))

export default router