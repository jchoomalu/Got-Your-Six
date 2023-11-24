import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required.'
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists.',
    required: 'Email is required.'
  },
  created: {
    type: Date,
    default: new Date()
  },
  updated: Date,
  password: {
    type: String,
    required: 'Password is required.'
  },
  branch: String,
  status: String,
  city: String,
  state: String,
  volunteer: { type: String, required: true },
  image: {
    data: Buffer,
    contentType: String,
  },
  avatar: String,
  private: {type: Boolean, default: false},
  messages:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message'}],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

//Bcrypt 
userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next()
  }
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err)
    }
    this.password = hash
    next()
  })
})

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err)
      }
      resolve(same)
    })
  })
}

export default mongoose.model('User', userSchema)



