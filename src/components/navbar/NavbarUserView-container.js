import React from 'react'

import {
  Skeleton,
  Switch,
  Card,
  Avatar
} from 'antd';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';

import { useAuth } from "../auth/Auth-context";

const { Meta } = Card;

const NavbarUserView = (props) => {

  const [{ user, loggedIn }] = useAuth();

  if (!loggedIn) return (<></>)

  return (
    <div>
      <Switch checked={loggedIn} />
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        >
        <Skeleton loading={!loggedIn} avatar active>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={`${user.first_name} ${user.last_name}`}
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </div>
  );
}

export default NavbarUserView
