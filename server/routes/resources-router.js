import express from 'express'
import { findAll } from '../controllers/crud-controller.js'
import resource from '../models/resources.model.js'

const router = express.Router()
router.route('/resources/federal')
.get(findAll(resource))

router.route('/resources/private')
.get(findAll(resource))


export default router