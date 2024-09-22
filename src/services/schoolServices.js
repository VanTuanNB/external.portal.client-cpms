import axios from "axios";

const API_BASE_URL = "https://external-service-cpms.vercel.app/api";

const fetchSchool = async () => {
  return axios.get(`${API_BASE_URL}/school`);
};

const schoolService = {
  fetchSchool,
};

export default schoolService;
