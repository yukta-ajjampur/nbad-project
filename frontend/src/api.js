import axios from 'axios';

// Create a single Axios instance
const API = axios.create({
  baseURL: 'http://localhost:3001', // Backend server URL
});

// Add the token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;