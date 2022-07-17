import React, { FC } from 'react';
import { useStore } from 'effector-react'
import { Avatar, List, Spin } from 'antd';
import './styles.css'
import { $allUsers, getAllUsersEvent } from "../../../../store/Users";


export const ContentUsersPage: FC = () => {
  const users = useStore($allUsers)
  getAllUsersEvent()

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
          </List.Item>
        )}
      />
  </div>
}