import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

//user api 
export const signup = async newUser => {
  const res = await api.post('/auth/signup', newUser)
  return res
}

export const signin = async user => {
  const res = await api.post('/auth/signin', user)
  return res
}

//gets a list of all users
export const list = async () => {
  const res = await api.get('/users/list')
  return res
}

//used throught app to maintain user info 
//likely will change to utilize jsonwebtoke in the future
export const getUser = async () => {
  const token = window.sessionStorage.getItem('token')
  const res = await api.get('/auth/verify', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  return res
}

//view a users profile or
export const getSingleUser = async (id) => {
  const res = await api.get(`/users/${id}`)
  return res
}

//delete your account
export const deleteUser = async (id) => {
  const res = await api.delete(`/users/${id}`)
  return res
}

//edit your account
export const updateUser = async (id, form) => {
  const res = await api.put(`/users/${id}`, form)
  return res
}

//edit your privacy with pre auth user
export const updatePrivacy = async (id, inputs) => {
  const res = await api.put(`/users/privacy/${id}`, inputs)
  return res
}


const userApi = {
  getUser,
  getSingleUser,
  list,
  signin,
  signup,
  updateUser
}

export default userApi