import User from '../models/users.model.js'
import Message from '../models/messages.model.js'

//Sending message creates subdocument and stores identical document in send and recipients messages creating a thread
const sendMessage = async (req, res) => {
  try {
    const msg = await Message.create(req.body)
    const userInfo = await User.findById(req.body.createdBy)
      .select('name avatar image branch status')
      .lean()
      .exec()
    msg.createdBy = {}
    const createdBy = {
      name: userInfo.name,
      avatar: userInfo.avatar,
      image: userInfo.image,
      branch: userInfo.branch,
      status: userInfo.status,
    }
    msg.createdBy = createdBy
    msg.save()
    await User.findByIdAndUpdate(
      req.body.createdBy,
      { $push: { messages: { _id: msg._id } } },
      { new: true })
    await User.findByIdAndUpdate(
      req.params.id,
      { $push: { messages: { _id: msg._id } } },
      { new: true })
    res.sendStatus(200)
  } catch (err) {
    res.json({ error: err })
  }
}

//add on to a current messages body and keeps coversation in single thread 
const replyMessage = async (req, res) => {
  let { body, msgid } = req.body
  try {
    const msg = await Message.findById(msgid)
    msg.body.push(body)
    msg.viewed = false
    msg.save()
    res.sendStatus(200)
  } catch (err) {
    res.json({ error: err })
  }
}

//deletes message from BOTH users 
const deleteMessage = async (req, res) => {
  const { msgId } = req.params
  try {
    await Message.findByIdAndDelete(msgId)
    res.sendStatus(200)
  } catch (err) {
    res.json({ error: err })
  }
}

//toggles viewed property to see if message was viewed or not
const updateMessage = async (req, res) => {
  const { id } = req.params
  try {
    await Message.findByIdAndUpdate(id, { $set: { viewed: true } })
    res.sendStatus(200)
  } catch (err) {
    res.json({ error: err })
  }
}

//gets number of unread messages
const queryMessage = async (req, res) => {
  const { id, query } = req.params
  if (query === 'unread') {
    try {
      const user = await User.findById(id, { messages: true })
        .populate('messages')
        .lean()
        .exec()
      let unreadCount = 0
      if (user.messages) {
        user.messages.forEach(msg => {
          if (msg.viewed === false) {
            unreadCount++
          }
        })
      }
      res.send(unreadCount.toString())
    } catch (err) {
      res.json({ error: err })
    }
  }
}

export default {
  sendMessage,
  replyMessage,
  deleteMessage,
  queryMessage,
  updateMessage,
}