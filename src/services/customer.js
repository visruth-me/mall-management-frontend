import axios from 'axios'

const baseUrl = '/api/feedbacks'

const submitFeedback = async(feedback)=>{
    const response = await axios.post(baseUrl, feedback)
    return response.data
}

export default {
    submitFeedback
}