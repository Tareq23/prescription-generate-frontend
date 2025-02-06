import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9090/api/v1", 
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("p-gen-auth-token"); 

    const publicEndPoint = ["/prescription", "/auth/signup", "/auth/login"];

    if (!publicEndPoint.some((endpoint) => config.url.includes(endpoint))) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    else{
      
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
