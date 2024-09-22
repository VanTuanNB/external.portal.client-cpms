import axios from "axios";

const API_BASE_URL = "https://external-service-cpms.vercel.app/api";

const fetchNews = async () => {
  return axios.get(`${API_BASE_URL}/news`);
};

const newsService = {
  fetchNews,
};

export default newsService;
