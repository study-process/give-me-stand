import React, { FC, useCallback, useState } from "react";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

import { headerAdminLogoutButtonStyle } from "../../components/Header/styles";
import { ExitButton } from "../../components/ExitButton";
import { resetCurrentUserEvent } from "../../store";
import { LOCAL_STORAGE_USER, NavigationPageTypesEnum } from "../../constants";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export const AdminPage: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isUsersDisplay, setIsUsersDisplay] = useState(true);
  const [isStandsDisplay, setIsStandsDisplay] = useState(false);
  const navigate = useNavigate()

  const handleUserClick = () => {
    if (!isUsersDisplay) {
      setIsUsersDisplay(true)
      setIsStandsDisplay(false)
    }
  }

  const handleStandsClick = () => {
    if (!isStandsDisplay) {
      setIsUsersDisplay(false)
      setIsStandsDisplay(true)
    }
  }

  const handleLogoutSubmit = useCallback(() => {
    resetCurrentUserEvent()
    window.localStorage.removeItem(LOCAL_STORAGE_USER);
    navigate(NavigationPageTypesEnum.LoginPage)
  }, [])

  return <Layout style={{
    width: "100vw",
    height: "100vh",
  }}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        style={{
          paddingTop: '3.75rem'
        }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'Пользователи',
            onClick: handleUserClick,
          },
          {
            key: '2',
            icon: <DatabaseOutlined />,
            label: 'Стенды',
            onClick: handleStandsClick,
          },
        ]}
      />
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: '0.5rem' }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          style: {
            paddingTop: '4rem'
        },
          onClick: () => setCollapsed(!collapsed),
        })}
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        {isUsersDisplay && <div>Content_USERS</div>}
        {isStandsDisplay && <div>Content_STANDS</div>}
      </Content>
    </Layout>
    <ExitButton style={headerAdminLogoutButtonStyle} onClick={handleLogoutSubmit}/>
  </Layout>
}