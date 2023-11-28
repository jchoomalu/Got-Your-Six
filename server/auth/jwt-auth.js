import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();


//CREATE TOKEN - called in the signin and signup functions
export const newToken = user => {
  try {
  return jwt.sign({ id: user.id }, process.env.jwtSecret, {
    expiresIn: process.env.jwtExpires
  })
} catch (error) {
  console.log(error)
}
}

//VERIFY TOKEN - called in the verify function 
export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.jwtSecret, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })