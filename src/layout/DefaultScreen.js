import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import TopbarView from "../components/topbar/TopbarView-container";
function DefaultScreen({ children }) {
  return (
    <>
      <TopbarView />
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <Content style={{ padding: 100, height: "100vh" }}>{children}</Content>
      </Layout>
    </>
  );
}

export default DefaultScreen;
