import axios from 'axios';

const API_BASE_URL = 'https://external-service-cpms.vercel.app/api';

export const fetchFaculty = async (keyword) => {
  return axios.get(`${API_BASE_URL}/faculty`, { params: { keyword } });
};
