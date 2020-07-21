import React from 'react'

import { useAuth } from "../auth/Auth-context";

import {HomeViewContainer} from './Home-style'
import { Result } from 'antd';

const  HomeView = (props) => {
  const [{user}] = useAuth();

  return (
    <HomeViewContainer>
       <Result
        status="success"
        title={`Bem-vindo a plataforma de IoT ${user.first_name || ''}`}
      />
    </HomeViewContainer>
  )
}

export default HomeView
