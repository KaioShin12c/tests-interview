import React, { ReactNode, useState } from "react";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./CommonLayout.module.css";

const { Header, Sider, Content } = Layout;

interface CommonLayoutProps {
  children?: ReactNode;
}

export const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuChange = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout>
      <Sider
        className={styles.sider}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className={styles.logo} />
        <Menu
          onSelect={handleMenuChange}
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "/users",
              icon: <UserOutlined />,
              label: "Users",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
