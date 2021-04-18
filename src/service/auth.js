import axios from "axios";

const authService = {
  registerUser: async ({ username, email, password }) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/signUp`,
      {
        username: username,
        email: email,
        password: password,
      }
    );
    return data;
  },
  registerAdmin: async ({ username, email, password }) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/signUpAdmin`,
      {
        username: username,
        email: email,
        password: password,
      }
    );
    return data;
  },
  login: async ({ username, password }) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/login`,
      {
        username: username,
        password: password,
      }
    );
    return data;
  },
  authHeader: () => {
    return { Authorization: "Bearer " + localStorage.getItem("user") };
  },
  storeToken: (token) => {
    localStorage.setItem("user", token);
  },
  logout: () => {
    localStorage.removeItem("user");
  },
};

export default authService;
