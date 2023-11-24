import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is required.'
  },
  description: {
    type: String,
  },
  attending: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  },
  attendingCount: {
    type: Number,
  },
  date: {
    type: Date,
  },
  image: {
    type: String,
  },
  cost: {
    type: String
  },
  created: {
    type: Date,
    default: new Date()
  }
})

export default mongoose.model('Event', EventSchema)