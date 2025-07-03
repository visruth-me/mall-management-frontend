import axios from 'axios'
const baseUrl = '/api/services'

const getForUpdate = async () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)

    // return Promise.resolve(request)
}

const update = (id, isAvailable) => {
    const { data } = axios.put(`${baseUrl}/${id}`, { isAvailable })
    return data
}

export default {
    getForUpdate,
    update
}