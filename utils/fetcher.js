import axios from 'axios'
const backend_URL = 'https://gorest.co.in/public-api'

const fetchAPI = axios.create({
    baseURL: backend_URL
})

export default fetchAPI
