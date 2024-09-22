import axios from "axios";

const API_BASE_URL = "https://external-service-cpms.vercel.app/api";

const fetchFaculty = async (keyword) => {
  return axios.get(`${API_BASE_URL}/faculty`, { params: { keyword } });
};

const getFacultyById = async (facultyId) => {
  const response = await axios.get(`${API_BASE_URL}/faculty/${facultyId}`);
  return response.data;
};

const facultyServices = {
  fetchFaculty,
  getFacultyById,
};

export default facultyServices;
