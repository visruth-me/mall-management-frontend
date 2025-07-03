import axios from 'axios'
const baseUrl = '/api/inquiries'

const getForApproval = async () => {
    const request = axios.get(`${baseUrl}/approve`)
    return request.then(response => response.data)

    // return Promise.resolve(request)
}

const update = (id, status) => {
    const { data } = axios.put(`${baseUrl}/${id}`, { status })
    return data
}

const create = async inquiry => {
    const response = await axios.post(baseUrl, inquiry)
    return response.data
}

export default {
    getForApproval,
    update,
    create
}