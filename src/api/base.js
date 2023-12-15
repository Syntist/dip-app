import axios from "axios";

// Set up a base URL for your API
const baseURL = process.env.REACT_APP_BASE_URL; // Replace with your actual API base URL

// Create an Axios instance with a base URL
const baseApi = axios.create({
  baseURL,
});

baseApi.interceptors.request.use(
  function (config) {
    config.headers["token"] = localStorage.getItem("token");

    config.headers["Content-Type"] = "multipart/form-data";
    config.responseType = "arraybuffer";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseApi;
