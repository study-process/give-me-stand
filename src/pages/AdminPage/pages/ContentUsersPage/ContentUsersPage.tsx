import React, { FC, useState } from 'react';
import { useStore } from 'effector-react'
import { Avatar, Button, List, Form, Input} from "antd";
import './styles.css'
import { $allUsers, getAllUsersEvent } from "../../../../store/Users";

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const ContentUsersPage: FC = () => {
  const users = useStore($allUsers)
  getAllUsersEvent()

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
        wrapperCol: { span: 14, offset: 4 },
      }
      : null;

  return <div className="admin-page__users-container">
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/jack" />}
              title={item.username}
              description={`Команда: ${item.team} · Админ: ${item.isAdmin ? 'Да' : 'Нет'}`}
            />
            <div className="user-controls">
              <Button type="primary">Редактировать</Button>
              <Button type="primary" danger>Удалить</Button>
            </div>
          </List.Item>
        )}
      />
  </div>
}