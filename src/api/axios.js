import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Set the base URL
  withCredentials: true, // Allow cookies to be sent with requests
});

// ✅ Add token interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
