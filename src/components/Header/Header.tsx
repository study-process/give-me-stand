import React, { FC, useCallback } from "react";
import { Radio } from 'antd';
import { headerLogoutButtonStyle, headerWrapperStyle, userAvatarStyle } from "./styles";
import { HeaderProps } from './interfaces'
import { ExitButton } from "../ExitButton";
import { resetCurrentUserEvent } from "../../store";
import { useNavigate } from "react-router-dom";
import { NavigationPageTypesEnum, ROOT_URL } from "../../constants";
import { UserAvatar } from "../UserAvatar";
import { LOCAL_STORAGE_USER } from '../../constants'
import { useLocation } from 'react-router-dom';
import { useStore } from "effector-react";
import { $isDarkMode } from "../../store/theme";

export const Header: FC<HeaderProps> = ({ onChange }) => {
  const isDarkMode = useStore($isDarkMode)
  const navigate = useNavigate()
  const location = useLocation()
  const value =
    location.pathname === NavigationPageTypesEnum.StandsPage ? '2' : '1'

  const handleLogoutSubmit = useCallback(() => {
    resetCurrentUserEvent()
    window.localStorage.removeItem(LOCAL_STORAGE_USER);
    navigate(ROOT_URL + NavigationPageTypesEnum.LoginPage)
  }, [])

  const handleNavigate = useCallback((page: string) => () => {
    navigate(ROOT_URL + page)
  }, [])

  return <>
    <div style={{...headerWrapperStyle, backgroundColor: isDarkMode ? '#303030' : '#FFFFFF'}}>
      <Radio.Group onChange={onChange} defaultValue="1" value={value}>
        <Radio.Button
          value="1"
          onClick={handleNavigate(NavigationPageTypesEnum.HomePage)}
        >Мои стенды
        </Radio.Button>
        <Radio.Button
          value="2"
          onClick={handleNavigate(NavigationPageTypesEnum.StandsPage)}
        >
          Все стенды
        </Radio.Button>
      </Radio.Group>
    </div>
    <ExitButton style={headerLogoutButtonStyle} onClick={handleLogoutSubmit}/>
    <UserAvatar style={userAvatarStyle}/>
  </>
}