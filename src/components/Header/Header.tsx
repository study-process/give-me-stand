import React, { FC, useCallback } from "react";
import { Radio } from 'antd';
import { headerLogoutButtonStyle, headerWrapperStyle, userAvatarStyle } from "./styles";
import { HeaderProps } from './interfaces'
import { ExitButton } from "../ExitButton";
import { resetCurrentUserEvent } from "../../store";
import { useNavigate } from "react-router-dom";
import { NavigationPageTypesEnum } from "../../constants";
import { UserAvatar } from "../UserAvatar";

export const Header: FC<HeaderProps> = ({ onChange }) => {
  const navigate = useNavigate()

  const handleLogoutSubmit = useCallback(() => {
    resetCurrentUserEvent()
    navigate(NavigationPageTypesEnum.HomePage)
  }, [])

  return <>
    <div style={headerWrapperStyle}>
      <Radio.Group onChange={onChange} defaultValue="1">
        <Radio.Button value="1">Мои стенды</Radio.Button>
        <Radio.Button value="2">Все стенды</Radio.Button>
      </Radio.Group>
    </div>
    <UserAvatar style={userAvatarStyle}/>
    <ExitButton style={headerLogoutButtonStyle} onClick={handleLogoutSubmit}/>
  </>
}