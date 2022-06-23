import React, {FC} from 'react';
import { Avatar, Badge, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { UserAvatarProps } from "./interfaces";
import { useStore } from "effector-react";
import { $currentUser } from "../../store";
import { $maxUsersStandsCount, $standsIsLoading } from "../../store/stands";
const { Text } = Typography;

export const UserAvatar: FC<UserAvatarProps> = ({style}) => {
  const {username, team} = useStore($currentUser) ?? {}
  const isStandsLoading = useStore($standsIsLoading)
  const {
    maxUsersStandsCount, isUserCanReleaseStand
  } = useStore($maxUsersStandsCount) ?? {}

  return (
    <div style={style}>
      <Badge.Ribbon text={team} placement="start">
        <div style={{ display: 'flex', paddingTop: '1.25rem', alignItems: 'center' }}>
          <Avatar shape="square" icon={<UserOutlined />} size={40} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text type="secondary" style={{paddingLeft: '0.5rem', fontSize: '0.875rem'}}>{username}</Text>
            {!isUserCanReleaseStand && !isStandsLoading && <Text type="danger" style={{ paddingLeft: "0.5rem", fontSize: "0.75rem" }}>
              {`Достигнут лимит занимаемых стендов: ${maxUsersStandsCount}`}
            </Text>}
          </div>
        </div>
      </Badge.Ribbon>
    </div>
  )
}
