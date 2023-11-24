import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

//for news, events and stories

//gets all the requested items from model collection and sends a query for sorting purposes
export const list = async (model, query) => {
  const res = await api.get(`/info/${model}/${query}`)
  return res
}

//updates like count and adds user to the likes list
export const like = async (model, userId, articleId) => {
  const res = await api.put(`/info/${model}/like/${articleId}`, {userId: userId})
  return res
}

//updates like count and adds user to the likes list
export const likeComment = async (model, userId, articleId, commentId) => {
  const res = await api.put(`/info/${model}/article/${articleId}`, {userId: userId, commentId: commentId})
  return res
}

//updates attend count and adds user to the attending list
export const attend = async (model, userId, articleId) => {
  const res = await api.put(`/info/${model}/attend/${articleId}`, {userId: userId})
  return res
}

//get specific article info
export const findOne = async (model, articleId) => {
  const res = await api.get(`/info/${model}/article/${articleId}`)
  return res
}

//posts comment to a particular article
export const newComment = async (comment, model, userId, articleId) => {
  const res = await api.post(`/info/${model}/article/${articleId}`, {commentBody: comment, commentUser: userId, commentDate: new Date()})
  return res
}

//post-request for a new story 
export const create = async (formData) => {
  const res = await api.post('/info/stories/new', formData)
  return res
}

//delete a story
export const deleteStory = async (id) => {
  const res = await api.delete(`/info/stories/delete/${id}`)
  return res
}

const newsEventsApi = {
  list,
  like,
  likeComment,
  attend,
  findOne,
  newComment,
  create,
  deleteStory,
}

export default newsEventsApi