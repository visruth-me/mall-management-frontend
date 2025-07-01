import axios from 'axios'
const baseUrl = '/api/login'

const setToken = (newToken) => {
    const token = `Bearer ${newToken}`
    axios.defaults.headers.common['Authorization'] = token
}

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { login, setToken }