import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Copyright © 2021
        <Link to="/">Cryptoverse Inc.</Link> <br />
        All Rights Reserved.
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  );
};

export default Footer;
