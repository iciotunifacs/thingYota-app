import React, {useState, useCallback} from "react";
import { Layout } from 'antd';

import './Main-style.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppRoute from '../layout/AppRoute'
import PrivateRouter from '../layout/PrivateRoute'

import Navbar from "../components/navbar/Navbarview-container"

import Home from "../components/home/HomeView-container"
import Statistic from '../components/statistic/StatisticView-container';
import BucketView from '../components/buckets/BucketView-container'
import { useAuth } from "../components/auth/Auth-context";


const { Sider, Content } = Layout;


const MainScreen = (props) => {

  const [render, setRender] = useState(1);
  const [{loggedIn}] = useAuth();

  const updateRender = useCallback(item => setRender(item.key),[render]);

  return (
    <Layout>
      {loggedIn && (
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="logo" />
          <Navbar updateRender={updateRender}/>
        </Sider>
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
