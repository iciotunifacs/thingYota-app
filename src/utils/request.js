import Axios from 'axios'

import getUser, { cleanUser } from './getUser';

let user = getUser();

export const apiRest = Axios.create({
  baseURL: process.env.API_REST_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.token}`
  },
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  }
})
