import React, { useState, useCallback } from "react";
import { Layout } from "antd";

import Navbar from "../../components/navbar/Navbarview-container";

import { useAuth } from "../../components/auth/Auth-context";

import NavUserView from "../../components/navbar/NavbarUserView-container";

const { Header } = Layout;

const MainScreen = (props) => {
  const [render, setRender] = useState(1);
  const [{ loggedIn }] = useAuth();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateRender = useCallback((item) => setRender(item.key), [render]);

  return (
    <Layout>
      {loggedIn && (
        <Header
          breakpoint="lg"
          collapsedWidth="0"
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
        >
          <NavUserView />
          <Navbar updateRender={updateRender} {...props} />
        </Header>
      )}
    </Layout>
  );
};

export default MainScreen;
