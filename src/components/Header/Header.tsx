import React, { FC, useCallback } from "react";
import {useStore} from 'effector-react'
import { Radio } from 'antd';
import { headerLogoutButtonStyle, headerWrapperStyle } from "./styles";
import { HeaderProps } from './interfaces'
import { ExitButton } from "../ExitButton";
import { ModalSubmit } from "../widgets/ModalSubmit/ModalSubmit";
import { $isLogoutModalVisible, setLogoutModalVisibleEvent } from "../../store/commonWidgets";
import { resetCurrentUserEvent } from "../../store";
import { useNavigate } from "react-router-dom";
import { NavigationPageTypesEnum } from "../../constants";

export const Header: FC<HeaderProps> = ({ onChange, onExitButtonClick }) => {
  const isLogoutModalVisible = useStore($isLogoutModalVisible)
  const navigate = useNavigate()

  const handleLogoutSubmit = useCallback(() => {
    resetCurrentUserEvent()
    setLogoutModalVisibleEvent(false)
    navigate(NavigationPageTypesEnum.HomePage)
  }, [])
  const handleLogoutCancel = useCallback(() => {
    setLogoutModalVisibleEvent(false)
  }, [])

  return <>
    <div style={headerWrapperStyle}>
      <Radio.Group onChange={onChange} defaultValue="1">
        <Radio.Button value="1">Мои стенды</Radio.Button>
        <Radio.Button value="2">Занять стенд</Radio.Button>
      </Radio.Group>
    </div>
    <ExitButton style={headerLogoutButtonStyle} onClick={onExitButtonClick}/>
    <ModalSubmit
      isVisible={isLogoutModalVisible}
      onSubmit={handleLogoutSubmit}
      onCancel={handleLogoutCancel}
      text={`Вы уверены, что хотите выйти?`}
    />
  </>
}