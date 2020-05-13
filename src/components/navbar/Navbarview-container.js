import React, {useState} from 'react'

import { Menu, Button } from 'antd';
import {
  PieChartOutlined,
  ExperimentFilled,
  CloseCircleFilled,
  ControlOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import NavUserView from './NavbarUserView-container'

import useLocalStorage from '../../hooks/useLocalStorage';
import { useHistory, useLocation } from '../../utils/routing';

import {useAuth} from '../auth/Auth-context'
import {singout} from '../auth/Auth-action'

const { SubMenu } = Menu;

const NavbarView = (props) => {

  const [user, setUser] = useLocalStorage('user');
  const history = useHistory();

  const [state, dispatch] = useAuth();

  return (
    <div style={{ height: "100vh" }}>
      <NavUserView/>
      <Menu defaultSelectedKeys={['4']} mode="inline" theme="dark">
        <Menu.Item key="1">
          <PieChartOutlined />
          <span>Estatísticas</span>
        </Menu.Item>
        <Menu.Item key="2">
          <ExperimentFilled />
          <span>Reservatórios</span>
        </Menu.Item>
        <Menu.Item key="3">
          <MailOutlined />
          <span>Reportar erro</span>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => singout(dispatch,{ history, setUser})}>
          <CloseCircleFilled />
          <span>Sair</span>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavbarView
