import axios from "axios";
import { getEnvVariable } from "@/utils/env.js";

const baseURL = getEnvVariable("API_URL");

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  res => res,
  async err => {
    const original = err.config;

    if (err.response.status === 401 && !original._retry) {
      original._retry = true;
      await axios.post("/refresh", {}, { withCredentials: true }); // обновим токен
      return axios(original); // повторим запрос
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
