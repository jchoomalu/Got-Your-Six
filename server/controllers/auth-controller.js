import User from '../models/users.model.js'
import {newToken, verifyToken} from '../auth/jwt-auth.js' //jwt middleware
import formidable from 'formidable'
import fs from 'fs'

//CREATE USER - using formidable for image formatting 
export const signup = async (req, res) => {
  const form = formidable({})
  let fields
  let files
  //extracts form data
  [fields, files] = await form.parse(req)
  //formats object and form data 
  let keyMap = Object.keys(fields)
  Object.values(fields).map((values, i) => {
    fields[keyMap[i]] = values[0]
  })
  //adds blanck object to fields for immage processing
  fields.image = {}
  //checks for image and processes image saving to db with image type
  if (files.image) {
    fields.image.data = fs.readFileSync(files.image[0].filepath)
    fields.image.contentType = files.image[0].mimetype
  }
  try {
    const newUser = await User.create(fields)
    const token = newToken(newUser)
    return res.send({ token })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

//signin for existing members
export const signin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'need email and password' })
  }
  try {
    const user = await User.findOne({ email: req.body.email })
      .select('email password')
      .exec()
    if (!user) {
      return res.status(401).send({ error: "User not found" })
    }
    const match = await user.checkPassword(req.body.password)
    if (!match) {
      return res.status(401).send({ error: "Invalid Password or Email" })
    }
    const token = newToken(user)
    return res.status(201).send({ token })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

//called after verify function sends the validated user information to the front end
export const sendUser = async (req, res) => {
  return await res.send(req.user)
}

//verify token is valid and call next whihc is send user function 
export const verify = async (req, res, next) => {
  const bearer = req.headers.authorization
  const token = bearer.split('Bearer ')[1].trim()
  let payload
  try {
    payload = await verifyToken(token)
  } catch (e) {
    return res.status(401).end()
  }
  const user = await User.findById(payload.id)
    .select('-password')
    .populate('messages')
    .lean()
    .exec()
  if (!user) {
    return res.status(401).end()
  }
  req.user = user
  next()
}

//edit profile details and profile image
export const updateUser = async (req, res) => {
  const { id } = req.params
  const form = formidable({})
  let fields
  let files
  try {
    [fields, files] = await form.parse(req)
    const current = await User.findById(id)
    let keyMap = Object.keys(fields)
    Object.values(fields).map((values, i) => {
      fields[keyMap[i]] = values[0]
    })
    fields.image = {}
    if (current.email !== fields.email) {
      const checkAvailable = await User.find({ email: fields.email })
        .lean()
        .exec()
      if (checkAvailable.length === 1) {
        return res.status(201).json({ message: "Email is already in use" })
      }
    }
    if (files.image) {
      fields.image.data = fs.readFileSync(files.image[0].filepath)
      fields.image.contentType = files.image[0].mimetype
    } else {
      fields.image = current.image
    }
    if (!files.image && fields.avatar !== "undefined") {
      delete fields.image
    }
    if (!files.image && fields.avatar === "undefined") {
      fields.image = current.image
      fields.avatar = current.avatar
    }
    current.name = fields.name
    current.email = fields.email
    current.branch = fields.branch
    current.status = fields.status
    current.volunteer = fields.volunteer
    current.city = fields.city
    current.state = fields.state
    current.avatar = fields.avatar
    current.image = fields.image
    current.save()
    return res.status(200).end()
  } catch (err) {
    return res.status(400).send({ message: err })
  }
}

export const updatePrivacy = async (req, res) => {
  const {id} = req.params
  let isPrivate = req.body.private
  isPrivate === "true" ? isPrivate = true : isPrivate = false
  const user = await User.findByIdAndUpdate(id, {$set: {private: isPrivate}}) 
} 


