const getUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);
  return user;
};
const cleanUser = async () => localStorage.setItem("user", null);

export { cleanUser, getUser as default };
