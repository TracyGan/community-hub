import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 200_000,
})

export default axiosInstance
