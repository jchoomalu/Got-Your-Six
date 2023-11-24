import mongoose from 'mongoose'

const ClassifiedsSchema = new mongoose.Schema({
  state: {
    type: String,
    enum: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
  },
  posts: [{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.mongo.ObjectId()
    },
    title: {
      type: String,
      trim: true,
      required: 'Title is required.'
    },
    description: {
      type: String,
      required: 'description is required.'
    },
    date: {
      type: Date,
      default: () => new Date(),
      required: 'description is required.'
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    cost: {
      type: String
    },
    city: {
      type: String
    }, 
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  }]
})

export default mongoose.model('Classified', ClassifiedsSchema)