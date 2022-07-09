import { FC } from 'react';
import { Switch } from "antd";
import {BulbFilled} from '@ant-design/icons'

export const ThemeSwitcher: FC<{
  isDarkMode: boolean,
  onChange: (isChecked: boolean) => void,
  className?: string,
}> = ({isDarkMode, onChange, className}) => {

  return <div className={className}>
    <Switch checked={isDarkMode} onChange={onChange} style={{marginRight: '1rem'}}/>
    <BulbFilled />
  </div>
}