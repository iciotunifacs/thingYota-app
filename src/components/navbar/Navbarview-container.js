import React from 'react'

import { Menu } from 'antd';
import {
  PieChartOutlined,
  ExperimentFilled,
  CloseCircleFilled,
  MailOutlined,
} from '@ant-design/icons';

import {Link} from 'react-router-dom'

import useLocalStorage from '../../hooks/useLocalStorage';
import { useHistory } from '../../utils/routing';

import {useAuth} from '../auth/Auth-context'
import {singout} from '../auth/Auth-action'

// const { SubMenu } = Menu;

const NavbarView = (props) => {


  const [, setUser] = useLocalStorage('user');
  const history = useHistory();
  const [, dispatch] = useAuth();

  return (
      <Menu mode="horizontal" theme="dark" >
          <Menu.Item key="1">
            <Link to='/statistics'/>
            <PieChartOutlined />
            <span>Estatísticas</span>
          </Menu.Item>
        {/* </Link> */}
        <Menu.Item key="2" >
          <Link to='/buckets'/>
          <ExperimentFilled />
          <span>Reservatórios</span>
        </Menu.Item>
        <Menu.Item key="3" >
          <Link to='/devices'/>
          <ExperimentFilled />
          <span>Dispositivos</span>
        </Menu.Item>
        <Menu.Item key="4" >
          <Link to='/report'/>
          <MailOutlined />
          <span>Reportar erro</span>
        </Menu.Item>
        <Menu.Item key="5" onClick={() => singout(dispatch,{ history, setUser})}>
          <CloseCircleFilled />
          <span>Sair</span>
        </Menu.Item>
      </Menu>
  );
}

export default NavbarView
