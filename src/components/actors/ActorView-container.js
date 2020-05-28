import React from "react";

import { ActorViewContainer } from "./Actor-style";

import { Typography } from "antd";

import ActorGrid from "./ActorGrid";
import ActorList from "./ActorList";

import Exceptions from '../../screens/Exceptions'

const { Title } = Typography;

const ActorSwitch = ({ actors, scenary }) => {

  if (actors.length < 1) return (
    <Exceptions type='not_have' text="Não há motores a serem listados" />
  )

  switch (scenary) {
    case "list":
      return <ActorList actors={actors} />;
    case "grid":
    default:
      return <ActorGrid actors={actors} />;
  }
};

const ActorView = ({ actors, scenary }) => {
  return (
    <ActorViewContainer>
      <Title level={3}>Motores</Title>
      <ActorSwitch actors={actors} scenary={scenary} />
    </ActorViewContainer>
  );
};

export default ActorView;
