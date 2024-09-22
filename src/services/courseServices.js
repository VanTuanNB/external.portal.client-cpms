import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "https://external-service-cpms.vercel.app/api";

const registerCourse = async (payload) => {
  const token = Cookies.get('accessToken');
  return axios.post(`${API_BASE_URL}/user/register-course`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

const courseService = {
  registerCourse,
};

  export default courseService;
