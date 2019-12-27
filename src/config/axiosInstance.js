import axios from "axios";

const detectEnv = () => process.env.NODE_ENV
const axiosInstance = axios.create({
  baseURL: detectEnv() === 'development' ? 'http://localhost:3001' : '/',
})

export default axiosInstance
