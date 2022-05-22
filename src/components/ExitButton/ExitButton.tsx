import React, { FC }from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { ExitButtonProps } from "./interfaces";

export const ExitButton: FC<ExitButtonProps> = ({style, onClick}) => {
  return (
    <div style={style}>
      <Button type="primary" shape="round" icon={<LogoutOutlined />} onClick={onClick}>
        Выйти
      </Button>
    </div>
  )
}