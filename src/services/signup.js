import axios from 'axios'

const reset = async credentials => {
    const response = await axios.post(`/api/${credentials.type}`, credentials)
    return response.data
}

export default { reset }