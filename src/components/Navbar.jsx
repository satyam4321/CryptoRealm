import React from "react";
import { Button, Menu, Typography, Avatar, MenuProps } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Item from "antd/es/list/Item";

const Navbar = () => {
  const items = [
    {
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
      key: "home",
    },
    {
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
      icon: <FundOutlined />,
      key: "cryptocurrencies",
    },
    {
      label: <Link to="/news">News</Link>,
      icon: <HomeOutlined />,
      key: "news",
    },
  ];
  return (
    <div className="nav-container">
      <div className="logo-container">
        {/* <Avatar src={icon} size="large" /> */}
        <Typography.Title level={2}>
          <Link to="/" style={{ color: "white" }}>
            CryptoRealm
          </Link>
        </Typography.Title>
      </div>
      <Menu mode="vertical" theme="dark" items={items} />
    </div>
  );
};

export default Navbar;
