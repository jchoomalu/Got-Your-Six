//sorts all querys by date likes or attendance for news and events
export const findAll = model => async (req, res) => {
  if (req.params.query === 'date') {
    const byDate = await model.find().sort({ created: -1 })
      .lean()
      .exec()
    return res.send(byDate)
  }
  else if (req.params.query === 'likes') {
    const byLikes = await model.find().sort({ likesCount: -1 })
      .lean()
      .exec()
    return res.send(byLikes)
  } else if (req.params.query === 'attendance') {
    const byAttendance = await model.find().sort({ attendingCount: -1 })
      .lean()
      .exec()
    return res.send(byAttendance)
  } else {
    try {
      const all = await model.find({})
        .lean()
        .exec()
      return res.send(all)
    } catch (err) {
      res.status(400).json({ error: "An Error Occured" + err })
    }
  }
}

//handles likes or attendance when a user clicks on buttons
export const updateOne = model => async (req, res) => {
  if (req.params.like === 'like') {
    await model.findByIdAndUpdate(req.params.id, { $push: { likes: req.body.userId }, $inc: { likesCount: 1 } })
  }
  else if (req.params.attend === 'attend') {
    await model.findByIdAndUpdate(req.params.id, { $push: { attending: req.body.userId }, $inc: { attendingCount: 1 } })
  }
  try {
    const updatedDoc = await model.findById(req.params.id)
      .lean()
      .exec()
    if (!updatedDoc) {
      return res.status(400).end()
    }
    res.status(200).json({ data: updatedDoc })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: "An Error Occured" + err })
  }
}

//handles comments on news and stories
export const updateComment = model => async (req, res) => {
  try {
    await model.findByIdAndUpdate(req.params.id, { $push: { comments: req.body } })
  } catch (err) {
    res.status(400).json({ error: "An Error Occured" + err })
  }
}

//handles like comments on news and stories
export const likeComment = model => async (req, res) => {
  try {
    const article = await model.findById(req.params.id)
    let comment = article.comments.id(req.body.commentId)
    if (comment.likes.includes(req.body.userId)) {
      return res.status(401).json({message: "You already like this"})
    }
    comment.likes.push(req.body.userId)
    comment.likesCount++
    article.save()
    return res.status(200).json({message: "You like this"})
  } catch (err) {
    res.status(400).json({ error: "An Error Occured" + err })
  }
}

//create one used for stories
export const createOne = model => async (req, res) => {
  try {
    await model.create(req.body)
    res.status(200).end()
  } catch (err) {
    res.status(400).json({ error: "An Error Occured" + err })
  }
}

//get whole article for news, events or stories
export const findOne = model => async (req, res) => {
  if (model.modelName === 'New') {
    try {
      const article = await model.findById(req.params.id)
        .populate('likes')
        .populate('comments.commentUser')
        .lean()
        .exec()
      res.send(article)
    } catch (err) {
      res.status(400).json({ error: "An Error Occured" + err })
    }
  }
  else if (model.modelName === 'Storie') {
    try {
      const article = await model.findById(req.params.id)
        .populate('likes')
        .populate('comments.commentUser')
        .populate('author')
        .lean()
        .exec()
      res.send(article)
    } catch (err) {
      res.json({ error: "An Error Occured" + err })
    }
  } else {
    try {
      const article = await model.findById(req.params.id)
        .populate('attending')
        .lean()
        .exec()
      res.send(article)
    } catch (err) {
      res.status(400).json({ error: "An Error Occured" + err })
    }
  }
}

//delete post
export const deleteOne = model => async (req, res) => {
  const {id} = req.params
  try {
  const story = await model.findByIdAndDelete(id)
  res.status(200).end()
  } catch (err) {
    res.status(500).json({ error: "An Error Occured" + err })
  }
}

const newsControllers = {
  deleteOne,
  findAll,
  findOne,
  updateOne,
  updateComment,
  createOne,
  likeComment,
}


export default newsControllers
