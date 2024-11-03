import axios from "axios";
import { backendIp } from "./ip";

// create axios instance for auth
const axiosAuth = axios.create({
  baseURL: backendIp,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to request header
axiosAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default axiosAuth;
