import React, { useState, useEffect } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage';
import { useHistory, useLocation } from '../../utils/routing';
import {useAuth} from './Auth-context';

import {singin, checkAuth} from './Auth-action';

import {
  Form,
  Input,
  Button,
  Layout,
  Row,
  Col
} from 'antd';

const {
  Header,
  Content,
  Footer,
} = Layout;

const SinginView = (props) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");

  const [user, setUser] = useLocalStorage('user');
  const [state, dispatch] = useAuth();
  const history = useHistory();
  const location = useLocation();
  function handleSubmit(event) {
    event.preventDefault()
    singin(dispatch, {
      username,
      password,
      setUser
    })
  }
  useEffect(() => {
    if (user) {
      checkAuth({
        dispatch,
        user,
        setUser,
        redirectTo: "/home",
        from: window.location.pathname,
        history,
        location
      })
    }
  }, [user])
  return (
    <div>
      <Layout>
        <Header>
          Wather control
        </Header>
        <Content>
          <Row>
            <Col span={6} offset={8}>
              <Form {...layout} name="basic" initialValues={{ remember: true }}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input  value={username} onChange={data => setUsername(data.target.value)}/>
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input value={password} onChange={data => setPasword(data.target.value)}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </div>
  );
}

export default SinginView;
