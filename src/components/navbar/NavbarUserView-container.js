import React from "react";

import { Link } from "react-router-dom";

import { Avatar } from "antd";

import {
  StyledUserCardMenu,
  AvatarStyle
} from "./Navbar-style";

import { useAuth } from "../auth/Auth-context";


const NavbarUserView = () => {
  const [{ user, loggedIn }] = useAuth();
  const { first_name, last_name } = user;

  if (!loggedIn) return <></>;

  return (
    <StyledUserCardMenu>
        <Avatar style={AvatarStyle}>
          {`${first_name ? first_name[0] : ""}${
            last_name ? last_name[0] : ""
          }`.toUpperCase()}
        </Avatar>
      <Link to="/profile">Editar perfil</Link>
    </StyledUserCardMenu>
  );
};

export default NavbarUserView;
