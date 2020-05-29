import React from "react";

import { Link } from "react-router-dom";

import { Avatar } from "antd";

import { StyledUserCardMenu, UserTextName } from "./Navbar-style";

import { useAuth } from "../auth/Auth-context";

import { toCaptalize } from "../../utils/string";

const NavbarUserView = (props) => {
  const [{ user, loggedIn }] = useAuth();

  if (!loggedIn) return <></>;

  return (
    <StyledUserCardMenu>
      {/* <Switch checked={loggedIn} /> */}
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <UserTextName>{`${toCaptalize(user.first_name)} ${toCaptalize(
        user.last_name
      )}`}</UserTextName>
      <Link to='/profile'>Editar perfil</Link>
    </StyledUserCardMenu>
  );
};

export default NavbarUserView;
