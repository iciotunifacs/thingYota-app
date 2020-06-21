import Axios from 'axios'

import getUser from './getUser';

let user = getUser();

export const apiRest = Axios.create({
  baseURL: process.env.REACT_APP_API_NODE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user && user.token ? user.token : process.env.REACT_APP_TOKEN_GUEST}`
  },
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  }
})

export const apiAuth = Axios.create({
  baseURL: `${process.env.REACT_APP_API_NODE_URL}/auth`,
  headers: {
    'Content-Type': 'application/json',
 },
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  }
})
