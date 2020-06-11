import config from "./config";

const getUser = () => JSON.parse(localStorage.getItem('user'))
const cleanUser = async () => localStorage.setItem('user', null);

export {
    cleanUser,
    getUser as default,
};
