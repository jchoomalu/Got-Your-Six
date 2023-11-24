import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})
//Creates a new message thread between two users
export const sendMessage = async (newMessage, toid, fromid) => {
  const res = await api.post(`/message/${toid}`, newMessage, fromid)
  return res
}
//adds text to an existing thread
export const replyMessage = async (reply, msgid) => {
  const res = await api.post(`/message/reply/${msgid}`, reply)
  return res
}

//gets messages by send or sender for sorting purposes
export const queryMessage = async (id, query) => {
  const res = await api.get(`/message/${id}/${query}`)
  return res
}

//deletes a thread from both user accounts regardless of who deletes it
export const deleteMessage = async (userId, msgId) => {
  const res = await api.delete(`/message/delete/${userId}/${msgId}`,)
  return res
}

//toggles whether or not message was viewed will be used to notify users of a new message
export const updateMessage = async (msgId) => {
  const res = await api.put(`/message/${msgId}`,)
  return res
}

const messageApi = {
  sendMessage,
  queryMessage,
  deleteMessage,
  replyMessage,
  updateMessage,
}

export default messageApi