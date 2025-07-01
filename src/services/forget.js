import axios from 'axios'

// const request = async ({ email, type }) => {
//   const { data } = await axios.post(`/api/${type}/forgot`, { email });
//   return data;
// };

const create = async ({ email, password, type }) => {
    const response = await axios.put('/api/forget', { email, password, type })
    return response.data
}

export default { create }