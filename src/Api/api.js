import axios from "axios";
// import AsyncStorage from "@react-native-community/async-storage";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = { "x-auth-token": token };
    }
    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
