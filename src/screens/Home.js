import React from "react";
import Homeview from "../components/home/HomeView-container";
import TopbarView from "../components/topbar/TopbarView-container";

const Home = (props) => {
  return (
    <>
      <TopbarView />
      <Homeview {...props} />
    </>
  );
};

export default Home;
