import jwt from 'jsonwebtoken'

//jwt middleware

//CREATE TOKEN - called in the signin and signup functions
export const newToken = user => {
  return jwt.sign({ id: user.id }, config.jwtSecret, {
    expiresIn: process.env.jwtExpires
  })
}

//VERIFY TOKEN - called in the verify function 
export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.jwtSecret, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })