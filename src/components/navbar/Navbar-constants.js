import React from 'react'
import {
  PieChartOutlined,
  ExperimentFilled,
  CloseCircleFilled,
  ControlOutlined,
  // MailOutlined,
  HomeOutlined
} from "@ant-design/icons";

export const NavList = [
  {key: "0",link: '/', title: "Início", icon: () => <HomeOutlined /> },
  {key: "1",link: '/statistics' ,title: "Estatísticas", icon: () => <PieChartOutlined/>},
  {key: "2",link: '/buckets', title: "Reservatórios", icon: () => <ExperimentFilled/>},
  {key: "3",link: '/devices', title: "Dispositivos", icon: () =><ControlOutlined/>},
  // {key: "4",link: '/report', title: "Reportar erro", icon: () =><MailOutlined/> },
  {key: "5",link: '/logout', title: "Sair", icon: () => <CloseCircleFilled/> },
]
