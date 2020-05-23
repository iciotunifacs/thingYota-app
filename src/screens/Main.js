import React, {useState, useCallback} from "react";
import { Layout } from 'antd';

import './Main-style.css';


import AppRoute from '../layout/AppRoute'

import Navbar from "../components/navbar/Navbarview-container"

import { useAuth } from "../components/auth/Auth-context";


const { Sider, Content, Header } = Layout;


const MainScreen = (props) => {

  const [render, setRender] = useState(1);
  const [{loggedIn}] = useAuth();

  const updateRender = useCallback(item => setRender(item.key),[render]);

  return (
    <Layout>
      {loggedIn && (
        <Header breakpoint="lg" collapsedWidth="0">
          <div className="logo" />
          <Navbar updateRender={updateRender}/>
        </Header>
      )}
      <Layout>
        <Content style={{margin: '24px 16px',padding: 24, minHeight: 280,}}>
          <AppRoute/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainScreen;
