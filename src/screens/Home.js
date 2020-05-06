import React from "react";
import { Layout } from 'antd';

import Home from "../components/home/HomeView-container"
import Navbar from "../components/navbar/Navbarview-container"

const { Sider, Content } = Layout;


const HomeScreen = (props) => {
  return (
    <Layout>
      <Sider>
        <Navbar/>
      </Sider>
      <Layout>
        <Content>
          <Home />
        </Content>
      </Layout>
    </Layout>
  )
}

export default HomeScreen;
