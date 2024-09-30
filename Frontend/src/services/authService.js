// /frontend/src/services/authService.js
import axios from 'axios';

// Define base URL for the API (replace with your backend server URL)
const API_URL = 'http://localhost:5000/api/auth';

// Signup service
export const signup = async (email, password, role) => {
  const response = await axios.post(`${API_URL}/signup`, { email, password, role });
  return response.data;
};

// Login service
export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};
