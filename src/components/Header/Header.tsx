import React, { FC } from "react";
import { Radio, RadioChangeEvent } from 'antd';
import { headerLogoutButtonStyle, headerWrapperStyle } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigationPageTypesEnum } from "src/constants";
import { HeaderProps } from './interfaces'
import { getLocationEvent } from "../../store/location";
import { ExitButton } from "../ExitButton";

export const Header: FC<HeaderProps> = ({ onChange }) => {
  return <>
    <div style={headerWrapperStyle}>
      <Radio.Group onChange={onChange} defaultValue="1">
        <Radio.Button value="1">Мои стенды</Radio.Button>
        <Radio.Button value="2">Занять стенд</Radio.Button>
      </Radio.Group>
    </div>
    <ExitButton style={headerLogoutButtonStyle}/>
  </>
}