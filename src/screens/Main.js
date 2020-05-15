import React, {useState, useCallback} from "react";
import { Layout } from 'antd';

import './Main-style.css';

import Navbar from "../components/navbar/Navbarview-container"

import Home from "../components/home/HomeView-container"
import Statistic from '../components/statistic/StatisticView-container';
import BucketView from '../components/buckets/BucketView-container'

const { Sider, Content } = Layout;


const MainScreen = (props) => {

  const [render, setRender] = useState(1);

  const components = {
    1: Home,
    2: BucketView,
    3: (props) => <div>Alone</div>,
    4: (props) => <div>Historico</div>
  }

  const updateRender = useCallback(item => setRender(item.key),[render]);

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Navbar updateRender={updateRender}/>
      </Sider>
      <Layout>
        {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '24px 16px 0' }}>
          {components[render](props)}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainScreen;
