import apiUrls from "@/helpers/api";
import axios from "axios";

const authServices = {
  login: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + apiUrls.token,
      {
        ...data,
        grant_type: "password",
        scope: "offline_access",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  },
  refresh: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + apiUrls.token,
      {
        ...data,
        grant_type: "refresh_token",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  },
};

export default authServices;
