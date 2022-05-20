import React from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

export const ExitButton = (props: {style: React.CSSProperties | undefined}) => {
  return (
    <div style={props.style}>
      <Button type="primary" shape="round" icon={<LogoutOutlined />}>
        Выйти
      </Button>
    </div>
  )
}