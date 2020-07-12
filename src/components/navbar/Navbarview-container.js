import React, { useEffect } from "react";

import { Menu } from "antd";

import { Link, useLocation } from "react-router-dom";

import useLocalStorage from "../../hooks/useLocalStorage";

import { useHistory } from "../../utils/routing";

import { useAuth } from "../auth/Auth-context";

import { NavList } from "./Navbar-constants";

const NavbarView = (props) => {
  const [, setUser] = useLocalStorage("user");
  const history = useHistory();
  const [, dispatch] = useAuth();
  const [page, setPage] = useLocalStorage("page");

  const location = useLocation();

  useEffect(() => {
    const item = NavList.find((item) => location.pathname.includes(item.link))
    setPage({...item})
  }, [location, setPage])

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
