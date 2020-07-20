import React, { useEffect } from "react";

import { Menu } from "antd";

import { Link, useLocation } from "react-router-dom";

import useLocalStorage from "../../hooks/useLocalStorage";

import { NavList } from "./Navbar-constants";

const NavbarView = (props) => {
  const [page, setPage] = useLocalStorage("page");

  const location = useLocation();


  useEffect(() => {
    let item;
    if (location && location.pathname && location.pathname === "/") {
      item =NavList[0];
    } else {
      item = NavList.find((item) => item.link.includes(location.pathname.split("/")[1]))
    }
    setPage({...item})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      selectedKeys={page && page.key ? [page.key] : []}
    >
      {NavList.map((item, key) => {
        return (
          <Menu.Item key={key}>
            <Link to={item.link || "/"} />
            <item.icon />
            <span>{item.title}</span>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default NavbarView;
