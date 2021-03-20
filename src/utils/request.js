import Axios from "axios";

import getUser from "./getUser";

const apiRest = Axios.create({
  baseURL: process.env.REACT_APP_API_NODE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  },
});

apiRest.interceptors.request.use((config) => {
  const token = getUser()?.token ?? process.env.REACT_APP_TOKEN_GUEST;
  config.headers.Authorization = `Bearer ${token}`;
});

const apiAuth = Axios.create({
  baseURL: `${process.env.REACT_APP_API_NODE_URL}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  },
});

export { apiAuth, apiRest };
