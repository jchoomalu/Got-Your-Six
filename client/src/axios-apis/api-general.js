import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

//general api to retrieve all data from server from particular url
export const getAll = async (url) => {
  const res = await api.get(url)
  return res
}

//general api to retrieve single bit of data from server from particular url
export const getOne = async (url) => {
  const res = await api.get(url)
  return res
}

const generalApi = {
 getAll,
 getOne, 
}

export default generalApi