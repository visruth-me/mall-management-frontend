import axios from 'axios'

const create = async credentials => {
    const response = await axios.post(`/api/${credentials.type}`, credentials)
    return response.data
}

export default { create }