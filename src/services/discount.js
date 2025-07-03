import axios from 'axios'
const baseUrl = '/api/discounts'

const getForApproval = async () => {
    const request = axios.get(`${baseUrl}/approve`)
    return request.then(response => response.data)

    // const request = [
    // {
    //     id: '1',
    //     shopName: 'Pizza Palace',
    //     title: 'Weekend Bonanza',
    //     description: 'Get 25% off on all pizzas this weekend!',
    //     percentage: 25,
    //     validFrom: '2025-07-01T00:00:00.000Z',
    //     validTill: '2025-07-03T23:59:59.999Z',
    //     isApproved: 'Pending',
    // },
    // {
    //     id: '2',
    //     shopName: 'Fashion Hub',
    //     title: 'Summer Sale',
    //     description: 'Flat 30% off on all summer collections.',
    //     percentage: 30,
    //     validFrom: '2025-07-05T00:00:00.000Z',
    //     validTill: '2025-07-10T23:59:59.999Z',
    //     isApproved: 'Approved',
    // },
    // {
    //     id: '3',
    //     shopName: 'Gadget World',
    //     title: 'Tech Tuesday',
    //     description: '15% off on accessories every Tuesday.',
    //     percentage: 15,
    //     validFrom: '2025-07-02T00:00:00.000Z',
    //     validTill: '2025-07-30T23:59:59.999Z',
    //     isApproved: 'Rejected',
    // }
    // ];

    // return Promise.resolve(request)
}

const update = async (id, status) => {
    const response = await axios.put(`${baseUrl}/${id}`, { status })
    return response.data
}

const create = async discounts => {
    const response = await axios.post(baseUrl, discounts)
    return response.data
}

export default {
    getForApproval,
    update,
    create
}