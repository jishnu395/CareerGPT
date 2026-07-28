import axios from "axios";

const api = axios.create({
  baseURL: "https://careergpt-backend-df4t.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;