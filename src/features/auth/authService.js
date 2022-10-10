import axios from 'axios'
axios.defaults.withCredentials = true;

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(`https://for-fun-casino-api.onrender.com${API_URL}`, userData)

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(`https://for-fun-casino-api.onrender.com${API_URL}login`, userData)

    return response.data
}

const isLogged = async () => {
    const response = await axios.get(`https://for-fun-casino-api.onrender.com${API_URL}islogged`)

    return response.data
}
// Logout user
const logout = async () => {
    const response = await axios.get(`https://for-fun-casino-api.onrender.com${API_URL}logout`)

    return response.data
}

const authService = {
    register,
    login,
    logout,
    isLogged,
}

export default authService
