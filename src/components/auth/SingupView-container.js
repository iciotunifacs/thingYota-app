import React, { useState, useEffect } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage';
import { useHistory, useLocation } from '../../utils/routing';
import {useAuth} from './Auth-context';

import {singup, checkAuth} from './Auth-action';

import {
  Form,
  Input,
  Button,
  Layout,
  Row,
  Col,
  Alert
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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] = useLocalStorage('user');
  const [state, dispatch] = useAuth();
  const history = useHistory();
  const location = useLocation();
  function handleSubmit(event) {
    event.preventDefault()
    singup(dispatch, {
      username,
      password,
      firstname,
      lastname,
      email,
      setUser
    })
  }

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
                  label="First name"
                  name="firstname"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                  <Input  value={firstname} onChange={data => setFirstname(data.target.value)}/>
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="lastname"
                  rules={[{ required: true, message: 'Please input your Last name!' }]}
                >
                  <Input  value={lastname} onChange={data => setLastname(data.target.value)}/>
                </Form.Item>
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[{ required: true, message: 'Please input your e-mail!' }]}
                >
                  <Input  value={email} onChange={data => setEmail(data.target.value)}/>
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password value={password} onChange={data => setPasword(data.target.value)}/>
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
      {state.error && (
        <p>{state.error.response.data.message}</p>
      )}
    </div>
  );
}

export default SinginView;
