import axios from "axios";

const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use((response) => response.data);
export default api;
