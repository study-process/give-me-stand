import React, { FC }from 'react';
import { Button, Popconfirm } from 'antd';
import { LogoutOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import { ExitButtonProps } from "./interfaces";

export const ExitButton: FC<ExitButtonProps> = ({style, onClick}) => {
  return (
    <div style={style}>
      <Popconfirm
        placement="bottomRight"
        title={"Вы уверены, что хотите выйти"}
        onConfirm={onClick}
        okText="Подтвердить"
        cancelText="Отмена"
        icon={<QuestionCircleOutlined />}
      >
        <Button type="primary" shape="round" icon={<LogoutOutlined />}>
          Выйти
        </Button>
      </Popconfirm>
    </div>

  )
}