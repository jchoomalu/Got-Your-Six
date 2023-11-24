import Classifieds from '../models/classifieds.model.js'
import formidable from 'formidable'
import fs from 'fs'

//list posts by state
const listByState = async (req, res) => {
  const {state} = req.params
  try {
  const posts = await Classifieds.findOne({state: state})
  .populate('posts.postedBy')
  .lean()
  .exec()
  res.send(posts)
  } catch (err) {
    res.status(500).json({ error: "An Error Occured" + err })
  }
}

//create new post
const newPost = async (req, res) => {
  const {state} = req.params
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
  //reads image data and creates image object with binary and metadata
  fields.image = {}
  fields.image.data = fs.readFileSync(files.image[0].filepath)
  fields.image.contentType = files.image[0].mimetype
  try {
  await Classifieds.findOneAndUpdate({state: state}, {$push: {posts: fields}})
  res.status(200).end()
  } catch (err) {
    res.status(500).json({ error: "An Error Occured" + err })
  }
}

//delete post
const deletePost = async (req, res) => {
  const {state, id} = req.params
  try {
  const allPosts = await Classifieds.findOne({state: state})
  allPosts.posts.remove({_id: id})
  allPosts.save()
  res.status(200).end()
  } catch (err) {
    res.status(500).json({ error: "An Error Occured" + err })
  }
}

export default {
  listByState,
  newPost, 
  deletePost
}