import axios from 'axios'

export default axios.create({
  baseURL: process.env.baseURL
})

// in pages... import axios from '~plugins/axios'
