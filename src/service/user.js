import axios from "axios";
import authService from "./auth";
const userService = {
  getUserInfoByToken: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/user/userInfo`, {
      headers: authService.authHeader(),
    });
  },
};

export default userService;
