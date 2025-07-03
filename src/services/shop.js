import axios from 'axios'
const baseUrl = '/api/shops'

const getAll = async () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)

    // const request = [
    // {
    //     id: '1',
    //     name: 'Pizza Palace',
    //     category: 'Dine',
    //     tenantID: 'tenant_101',
    //     description: 'Serving the best Italian pizzas in town!',
    //     location: 'Ground Floor, G12',
    //     email: 'contact@pizzapalace.com',
    //     phone: '9876543210',
    // },
    // {
    //     id: '2',
    //     name: 'Fashion Hub',
    //     category: 'Dress',
    //     tenantID: 'tenant_102',
    //     description: 'Latest fashion trends for all ages.',
    //     location: 'First Floor, F23',
    //     email: 'support@fashionhub.com',
    //     phone: '9123456780',
    // },
    // {
    //     id: '3',
    //     name: 'Glow Beauty',
    //     category: 'Beauty',
    //     tenantID: 'tenant_103',
    //     description: 'Skincare and cosmetics that make you glow.',
    //     location: 'Second Floor, B18',
    //     email: 'hello@glowbeauty.com',
    //     phone: '9988776655',
    // },
    // {
    //     id: '4',
    //     name: 'GameZone',
    //     category: 'Entertainment',
    //     tenantID: 'tenant_104',
    //     description: 'Arcade and VR fun for all ages!',
    //     location: 'Third Floor, E45',
    //     email: 'info@gamezone.com',
    //     phone: '9001122334',
    // }
    // ];
    // return Promise.resolve(request)
}

export default {
    getAll
}