import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9090/api/v1", 
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("p-gen-auth-token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
