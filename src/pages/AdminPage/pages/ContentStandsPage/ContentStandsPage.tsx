import React, { FC } from 'react';
import { useStore } from 'effector-react'
import { List } from 'antd';
import {CloudServerOutlined} from '@ant-design/icons'
import './styles.css'
import { $stands, getStandsEvent } from "../../../../store/stands";
import { StandCardProps } from "../../../../components/Stands/StandCard/interfaces";


export const ContentStandsPage: FC = () => {
  const stands: StandCardProps[] = useStore($stands)
  getStandsEvent('/stands')
  console.log(stands, 'stands')

  return <div className="admin-page__users-container">
    <List
      itemLayout="horizontal"
      dataSource={stands}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<CloudServerOutlined />}
            title={item?.id}
            description={`Команда: ${item?.team}`}
          />
        </List.Item>
      )}
    />
  </div>
}