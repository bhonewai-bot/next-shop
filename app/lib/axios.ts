import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// api.interceptors.request.use()
api.interceptors.request.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Call Refresh API Token
      // Call previous API again
      console.log("API failed: ", error.response?.status);
    }

    return Promise.reject(error);
  },
);

export default api;
