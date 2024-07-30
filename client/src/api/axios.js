import axios from "axios";
// import { toast } from "react-hot-toast";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const v_app_token = `Bearer ${localStorage.getItem("v_app_token")}`;
    config.headers.authorization = v_app_token;
    return config;
  },
  (error) => {
    return error;
  }
);

instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    // if (data.notify) {
    //   toast.success(data.message);
    // }
    return response;
  },
  (error) => {
    const { response } = error;

    // if (response.data.notify) {
    //   toast.error(response?.data?.message);
    // }
    // console.log(response)

    if (response?.data?.code == 401) {
      localStorage.clear();
      // window.open(`${import.meta.env.VITE_APP_BASE_URL}/auth/login`, "_self");
      // setTimeout(() => {
      //   window.location.replace(`${import.meta.env.VITE_APP_BASE_URL}/auth/login`);
      // }, 1000);
    }
    return error;
  }
);

export default instance;
