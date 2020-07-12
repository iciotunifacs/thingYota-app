import React from 'react'
import {
  PieChartOutlined,
  ExperimentFilled,
  CloseCircleFilled,
  MailOutlined,
} from "@ant-design/icons";

export const NavList = [
  {Link: '/', title: "Início", icon: () => <PieChartOutlined/> },
  {link: '/statistics' ,title: "Estatísticas", icon: () => <PieChartOutlined/>},
  {link: '/buckets', title: "Reservatórios", icon: () => <ExperimentFilled/>},
  {link: '/devices', title: "Dispositivos", icon: () =><ExperimentFilled/>},
  {link: '/report', title: "Reportar erro", icon: () =><MailOutlined/> },
  {link: '/logout', title: "Sair", icon: () => <CloseCircleFilled/> },
]
