import React from "react";
import Homeview from "../components/home/HomeView-container";
import DefaultScreen from "../layout/DefaultScreen";

const Home = (props) => {
  return (
    <DefaultScreen>
      <Homeview {...props} />
    </DefaultScreen>
  );
};

export default Home;
