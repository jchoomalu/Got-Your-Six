import mongoose from 'mongoose'

const NewsSchema = new mongoose.Schema({
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
    type: String
  },
  article: {
    type: String,
    required: 'Article is required.',
  }, 
  comments: [{
    commentUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    commentBody: {type: String},
    commentDate: {type: Date, default: new Date()},
    likes: [],
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
  created: {
    type: Date,
    default: new Date()
  },
  likes: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  },
  likesCount: Number,
  category: {
    type: String,
    default: "Military News"
  }
})

export default mongoose.model('New', NewsSchema)