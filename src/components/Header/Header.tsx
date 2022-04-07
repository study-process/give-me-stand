import { FC } from 'react'
import { Tabs } from 'antd';
import { headerWrapperStyle } from './styles'
import { useNavigate } from "react-router-dom";
import { NavigationPageTypesEnum } from "src/constants";
import { HeaderProps } from './interfaces'

const { TabPane } = Tabs;

export const Header: FC<HeaderProps> = ({ isVisible = true }) => {
  const navigate = useNavigate()
  const handleChange = (key: string) => {
    key === "1" ? navigate(NavigationPageTypesEnum.UserPage)
      : navigate(NavigationPageTypesEnum.StandsPage)
  }
  return <>
    {isVisible && (<div style={headerWrapperStyle}>
      <Tabs defaultActiveKey="1" onChange={handleChange}>
        <TabPane tab="Мои стенды" key="1" />
        <TabPane tab="Занять стенд" key="2" />
      </Tabs>
    </div>)}
  </>
}