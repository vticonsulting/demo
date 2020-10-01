import axios from 'axios'

export function getMessage() {
  let baseURL = process.env.VUE_APP_API_URL || 'http://localhost:3000'
  return axios.get(`${baseURL}/message`).then(response => {
    return response.data
  })
}
