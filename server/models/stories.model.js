import mongoose from 'mongoose'

const StoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is required.'
  },
  subtitle: {
    type: String,
    trim: true,
    required: 'Subtitle is required.'
  },
  image: {
    type: String,
  },
  article: {
    type: String,
    required: true,
    required: 'Article is required.',
  }, 
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    defualt: "anonymous"
  },
  created: {
    type: Date,
    default: new Date()
  },
  likes: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  },
  likesCount: {
    type: Number, 
    default: 0
  },
  comments: [{
    commentUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    commentBody: {type: String},
    commentDate: {type: Date, default: new Date()},
    likes: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'User',
    }],
    likesCount: {
      type: Number,
      default: 0,
    },
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      //creates new id for each comment to allow seperate likes
      default: () => new mongoose.mongo.ObjectId()
    }
  }],
  allowComments: {
    type: Boolean,
    default: true,
  },
  category: {
    type: String,
    default: "Military Story"
  }
})

export default mongoose.model('Storie', StoriesSchema)