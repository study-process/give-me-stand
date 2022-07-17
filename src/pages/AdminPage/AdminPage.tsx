import React, { FC, useCallback, useEffect, useState } from "react";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

import { headerAdminLogoutButtonStyle } from "../../components/Header/styles";
import { ExitButton } from "../../components/ExitButton";
import { $currentUser, currentUser, resetCurrentUserEvent, setCurrentUserEvent } from "../../store";
import { LOCAL_STORAGE_USER, NavigationPageTypesEnum, ROOT_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import { ContentUsersPage, ContentStandsPage } from "./pages";
import { useStore } from "effector-react";
import { $isDarkMode } from "../../store/theme";
import useLocalStorage from "use-local-storage";
import { ErrorPage } from "../ErrorPage";
import { ChangePasswordPage } from "../ChangePasswordPage";

const { Header, Sider, Content } = Layout;

export const AdminPage: FC = () => {
  const isDarkMode = useStore($isDarkMode)
  const [collapsed, setCollapsed] = useState(false);
  const [isUsersDisplay, setIsUsersDisplay] = useState(true);
  const [isStandsDisplay, setIsStandsDisplay] = useState(false);
  const navigate = useNavigate()

  const [localStorageUser, setLocalStorageUser] =
    useLocalStorage<currentUser | null>(LOCAL_STORAGE_USER, null)
  const user = useStore($currentUser)

  useEffect(() => {
    if (user.userId) {
      setLocalStorageUser(user)
    }
  }, [user]);

  useEffect(() => {
    if (!user.userId && localStorageUser?.userId) {
      setCurrentUserEvent({
        login: localStorageUser.login,
        userId: localStorageUser.userId,
        username: localStorageUser.username,
        team: localStorageUser.team,
        maxStandsCount: localStorageUser.maxStandsCount,
        isMaxUsersStandsCountEnabled: localStorageUser.isMaxUsersStandsCountEnabled,
        isTransferPasswordChanged: localStorageUser.isTransferPasswordChanged,
        accessToken: localStorageUser.accessToken,
        adminSecret: localStorageUser.adminSecret,
        matterMostLink: localStorageUser.matterMostLink,
        isAdmin: localStorageUser.isAdmin,
      })
    }
  }, [user]);

  if (!user.userId && !localStorageUser?.userId) {
    return <ErrorPage />
  }

  if (!user.isTransferPasswordChanged && !localStorageUser?.isTransferPasswordChanged) {
    return <ChangePasswordPage />
  }

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
    navigate(ROOT_URL + NavigationPageTypesEnum.LoginPage)
  }, [])

  return <Layout style={{
    width: "100vw",
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
    <Layout className="site-layout" style={{ backgroundColor: isDarkMode ? '#6f6c6c' : '#FFFFFF'}}>
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
        {isUsersDisplay && <ContentUsersPage />}
        {isStandsDisplay && <ContentStandsPage />}
      </Content>
    </Layout>
    <ExitButton style={headerAdminLogoutButtonStyle} onClick={handleLogoutSubmit}/>
  </Layout>
}