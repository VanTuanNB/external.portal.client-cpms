import axios from "axios";

const API_BASE_URL = "https://external-service-cpms.vercel.app/api";

const login = async (payload) => {
  return axios.post(`${API_BASE_URL}/auth/login`, payload);
};

const register = async (payload) => {
  return axios.post(`${API_BASE_URL}/auth/register`, payload);
};

const admissionRegister = async (payload) => {
  return axios.post(`${API_BASE_URL}/admissions`, payload);
};

const getUserById = async (userId, token) => {
  const response = await axios.get(`${API_BASE_URL}/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

const authService = {
  login,
  register,
  getUserById,
  admissionRegister,
};

export default authService;
