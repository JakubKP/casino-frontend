import axios from 'axios'
axios.defaults.withCredentials = true;

const API_URL = '/api/messages/'

// Send message
const sendMessage = async (messageData) => {
    
    const response = await axios.post(`https://for-fun-casino-api.onrender.com${API_URL}send`, messageData)

    return response.data
}

// Get messages
const getMessages = async () => {
    const response = await axios.get(`https://for-fun-casino-api.onrender.com${API_URL}get`)

    return response.data
}

const messagesService = {
    sendMessage,
    getMessages,
}

export default messagesService
