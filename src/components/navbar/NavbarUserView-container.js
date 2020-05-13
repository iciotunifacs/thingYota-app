import React from 'react'

import {
  Avatar,
  Typography
} from 'antd';

import {
  StyledUserCardMenu,
  UserTextName
} from './Navbar-style'

import {
  useAuth
} from "../auth/Auth-context";

import {
  toCaptalize
} from '../../utils/string'

const NavbarUserView = (props) => {

  const [{ user, loggedIn }] = useAuth();

  if (!loggedIn) return (<></>)

  return (
    <StyledUserCardMenu>
      {/* <Switch checked={loggedIn} /> */}
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <UserTextName>{`${toCaptalize(user.first_name)} ${toCaptalize(user.last_name)}`}</UserTextName>
        <a>Editar perfil</a>
    </StyledUserCardMenu>
  );
}

export default NavbarUserView
