import axios from "axios";
import appConfigs from "./app.config";

const axios_instance = axios.create({
  baseURL: appConfigs.API_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${appConfigs.API_TOKEN}`,
  },
});

axios_instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios_instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      console.log("Request timed out");
    }
    return Promise.reject(error);
  }
);

export default axios_instance;
