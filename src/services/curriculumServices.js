import axios from "axios";

const API_BASE_URL = "https://external-service-cpms.vercel.app/api";

const fetchCurriculum = async () => {
  return axios.get(`${API_BASE_URL}/curriculum`);
};

const courseService = {
  fetchCurriculum,
};

export default courseService;
