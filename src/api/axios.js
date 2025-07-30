import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5500',
  withCredentials: true, // if you’re using cookies (good for JWT)
});

export default axiosInstance;
