import React, { useState, useEffect } from 'react'

import {
  Form,
  Input,
  Button,
  Layout,
  Row,
  Col,
  Typography,
  Tooltip
} from 'antd';

import { Link } from "react-router-dom"

import useLocalStorage from '../../hooks/useLocalStorage';

import { useHistory, useLocation } from '../../utils/routing';

import { useAuth } from './Auth-context';
import { singin, checkAuth } from './Auth-action';

const {
  Text
} = Typography;

const {
  Content,
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

  useEffect(() => {
    if (user) {
      checkAuth({
        dispatch,
        user,
        setUser,
        redirectTo: "/",
        from: window.location.pathname,
        history,
        location
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])


  function handleSubmit(event) {
    event.preventDefault()
    singin(dispatch, {
      username,
      password,
      setUser
    })
  }

  return (
    <Layout style={{ background: "#FAFAFA" }}>
      <Content>
        <Row>
          <Col span={6} offset={8}>
            <Form {...layout} name="basic" initialValues={{ remember: true }}>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input value={username} onChange={data => setUsername(data.target.value)} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password value={password} onChange={data => setPasword(data.target.value)} />
              </Form.Item>
              {state.error && (
                <Form.Item {...tailLayout}>
                  <Text type="danger"> {state.error.response.data.message}</Text>
                </Form.Item>
              )}
              <Form.Item {...tailLayout}>
                <Tooltip title="Useful information">
                  <Link to="/singup">
                    <p>Not have account? Sing up</p>
                  </Link>
                </Tooltip>
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
    </Layout>
  );
}

export default SinginView;
