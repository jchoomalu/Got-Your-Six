//resources and non-auth users forwarded here
//handles multiple queries for single item in a collection
export const findOne = model => async (req, res) => {
  try {
    const data = await model.findById(req.params.id)
      .lean()
      .exec()
    if (!data) {
      return res.status(400).end()
    }
    res.status(200).json({ data: data })
  } catch (err) {
    res.status(500).json({ error: "An Error Occured" + err })
  }
}

//handles multiple queries for all items in a collection
export const findAll = model => async (req, res) => {
  if (model.modelName === 'Storie') {
    //all stories query
    try {
      const all = await model.find()
        .populate('author')
        .lean()
        .exec()
      return res.send(all)
    } catch (err) {
      res.status(500).json({ error: "An Error Occured" + err })
    }
  } else if (model.modelName === 'User') {
    try {
      //all user query excludes private accounts
      const all = await model.find({ private: false })
        .populate("messages")
        .lean()
        .exec()
      return res.send(all)
    } catch (err) {
      res.status(500).json({ error: "An Error Occured" + err })
    }
  } else {
    if (req.path.includes('private')) {
      try {
        const all = await model.find({ federal: false })
          .lean()
          .exec()
        return res.send(all)
      } catch (err) {
        res.status(500).json({ error: "An Error Occured" + err })
      }
    } else {
      try {
        const all = await model.find({ federal: true })
          .lean()
          .exec()
        return res.send(all)
      } catch (err) {
        res.status(500).json({ error: "An Error Occured" + err })
      }
    }
  }
}

//deletes user account from db
export const removeOne = model => async (req, res) => {
  try {
    const removed = await model.findOneAndRemove({ _id: req.params.id })
    if (!removed) {
      return res.status(400).end()
    }
    return res.status(200).json({ data: removed })
  } catch (err) {
    res.status(500).json({ error: "An Error Occured" + err })
  }
}

export const crudControllers = model => ({
  findOne: findOne(model),
  findAll: findAll(model),
  removeOne: removeOne(model),
})
