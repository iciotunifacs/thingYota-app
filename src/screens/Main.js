import React from "react";
import { Layout } from 'antd';

import Home from "../components/home/HomeView-container"
import Navbar from "../components/navbar/Navbarview-container"
import './Main-style.css';
const { Sider, Content } = Layout;


const MainScreen = (props) => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Navbar/>
      </Sider>
      <Layout>
        {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '24px 16px 0' }}>
          <Home />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainScreen;
