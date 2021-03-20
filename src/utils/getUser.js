const getUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user;
};
const cleanUser = async () => localStorage.setItem("user", null);

export { cleanUser, getUser as default };
