import React, { FC, useCallback, useState } from "react";
import { Radio, Button, RadioChangeEvent } from 'antd';
import { headerWrapperStyle } from './styles'
import { useLocation, useNavigate } from "react-router-dom";
import { NavigationPageTypesEnum } from "src/constants";
import { HeaderProps } from './interfaces'
import { getLocationEvent } from "../../store/location";

export const Header: FC<HeaderProps> = ({ isVisible = true }) => {
  const navigate = useNavigate()
  const location = useLocation()
  getLocationEvent(location.pathname)

  const onChange = (e: RadioChangeEvent) => {
    const value = e.target.value
    value === "1" ? navigate(NavigationPageTypesEnum.UserPage)
      : navigate(NavigationPageTypesEnum.StandsPage)
  }

  return <>
    {isVisible && (<div style={headerWrapperStyle}>
      <Radio.Group onChange={onChange} defaultValue="1">
        <Radio.Button value="1">Мои стенды</Radio.Button>
        <Radio.Button value="2">Занять стенд</Radio.Button>
      </Radio.Group>
    </div>)}
  </>
}