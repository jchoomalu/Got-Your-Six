import mongoose from 'mongoose'

const ResourcesSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  online: {
    type: String,
    trim: true,
    required: true,
  },
  type: {
    type: String,
    trim: true,
    required: true,
  },
  federal: Boolean
})

export default mongoose.model('Resource', ResourcesSchema)