import mongoose from 'mongoose'

const Schema = mongoose.Schema
const Message = new Schema(
  {
    title: { type: String, required: true },
    body: [],
    createdBy: {type: Object},
    created: { type: Date, default: new Date() },
    viewed: {
      type: Boolean,
      default: false,
    }
  },
  )

export default mongoose.model('Message', Message)