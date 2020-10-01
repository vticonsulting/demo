import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default {
  getMessages(perPage, page) {
    return apiClient.get('/messages?_limit=' + perPage + '&_page=' + page)
  },
  getMessage(id) {
    return apiClient.get('/messages/' + id)
  },
  postMessage(message) {
    return apiClient.post('/messages', message)
  },
}
