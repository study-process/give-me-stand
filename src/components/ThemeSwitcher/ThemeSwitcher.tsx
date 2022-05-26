import React, { FC } from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { themeSwitcherStyle } from './styles'
import { useStore } from "effector-react";
import { $isDarkMode, setDarkModeEvent } from "../../store/commonWidgets";

export const ThemeSwitcher: FC = () => {
  const isDarkMode = useStore($isDarkMode)
  console.log(isDarkMode)

  const handleChange = () => {
    console.log('switch theme')
    isDarkMode ? setDarkModeEvent(false) : setDarkModeEvent(true)
  }

  return <Switch
    style={themeSwitcherStyle}
    onChange={handleChange}
    checkedChildren={<CheckOutlined />}
    unCheckedChildren={<CloseOutlined />}
    checked={isDarkMode}
  />
}