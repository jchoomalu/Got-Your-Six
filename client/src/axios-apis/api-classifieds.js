import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

//
export const listByState = async (state) => {
  const res = await api.get(`/local/classifieds/${state}`)
  return res
}

export const newPost = async (state, form) => {
  const res = await api.post(`/local/classifieds/${state}`, form)
  return res
}

export const deletePost = async (state, id) => {
  const res = await api.delete(`/local/classifieds/${state}/${id}`)
  return res
}

const classifiedsApi = {
 listByState,
 newPost, 
 deletePost,
}

export default classifiedsApi