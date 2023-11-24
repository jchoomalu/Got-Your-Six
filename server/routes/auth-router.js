import express from 'express'
import {signup, signin, verify, sendUser, updateUser, updatePrivacy} from '../controllers/auth-controller.js'

//authentication router use with jsonwebtoken
const router = express.Router()
router.route('/auth/signin')
.post(signin)

router.route('/auth/signup')
.post(signup)

router.route('/auth/verify')
.get(verify, sendUser)

router.route('/users/:id')
.put(updateUser)

router.route('/users/privacy/:id')
.put(updatePrivacy)

export default router