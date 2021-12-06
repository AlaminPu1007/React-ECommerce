import axios from "axios";
// import AsyncStorage from "@react-native-community/async-storage";

const instance = axios.create({
  //https://mmapi.devech.com/
  baseURL: "http://localhost:3300/api/",
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
