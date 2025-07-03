import axios from 'axios'
const baseUrl = '/api/feedbacks'

const getAll = async () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)

    // const request = [
    //     {
    //     id: '1',
    //     username: 'john_doe',
    //     shopName: 'Pizza Palace',
    //     rating: 4,
    //     description: 'Great pizza and fast service!',
    //     },
    //     {
    //     id: '2',
    //     username: 'jane_smith',
    //     shopName: 'Fashion Hub',
    //     rating: 5,
    //     description: 'Loved the collection!',
    //     },
    // ]
    // return Promise.resolve(request)
}

const getByShop = async (userID) => {
  const { data } = await axios.get(`${baseUrl}/shop/${userID}`);
  return data;
};

export default {
    getAll,
    getByShop
}