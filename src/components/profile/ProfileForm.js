import React, { useState, useMemo, useEffect } from "react";

import { Form, Input, Button, Layout, Row, Col, Typography } from "antd";

import { useAuth } from "../auth/Auth-context";

const { Text } = Typography;

const { Content } = Layout;

const ProfileForm = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [{ user: userAuth, error }] = useAuth();

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const _firstname = useMemo(() => userAuth.first_name || "", [userAuth]);
  const _lastname = useMemo(() => userAuth.last_name || "", [userAuth]);
  const _username = useMemo(() => userAuth.username || "", [userAuth]);
  const _email = useMemo(() => userAuth.email || "", [userAuth]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const hasChanges =
    username === _username &&
    firstname === _firstname &&
    lastname === _lastname &&
    email === _email;

  useEffect(() => {
    if (userAuth) {
      let { username, first_name, last_name, email } = userAuth;
      setUsername(username);
      setFirstname(first_name);
      setLastname(last_name);
      setEmail(email);
    }
  }, [userAuth]);

  console.log(hasChanges, username, _username)
  // ||password !== _password;
  return (
    <Layout style={{ backgroundColor: "#FAFAFA" }}>
      {userAuth && (
        <Content>
          <Row>
            <Col span={6} offset={8}>
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  firstname: _firstname,
                  lastname: _lastname,
                  username: _username,
                  email: _email,
                }}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    value={username}
                    onChange={(data) => setUsername(data.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="First name"
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    value={firstname}
                    onChange={(data) => setFirstname(data.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="lastname"
                  rules={[
                    { required: true, message: "Please input your Last name!" },
                  ]}
                >
                  <Input
                    value={lastname}
                    onChange={(data) => setLastname(data.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your e-mail!" },
                  ]}
                >
                  <Input
                    value={email}
                    onChange={(data) => setEmail(data.target.value)}
                  />
                </Form.Item>

                {error && (
                  <Form.Item {...tailLayout}>
                    <Text type="danger"> {error.response.data.message}</Text>
                  </Form.Item>
                )}
                <Form.Item {...tailLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                    disabled={hasChanges}
                  >
                    Apply changes
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
      )}
    </Layout>
  );
};

export default ProfileForm;
