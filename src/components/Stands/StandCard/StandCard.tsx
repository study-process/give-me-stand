import { FC, useMemo } from "react";
import { StandCardProps } from './interfaces'
import { Skeleton, Card, Avatar, Button, Descriptions, Tooltip} from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import { statusTypeEnum } from "./constants";
import {statusBusyStyle, statusFreeStyle} from './styles'
import { setOpenStandEvent } from "src/store/stands";

const { Meta } = Card;
const itemStyle = { fontSize: "0.75rem" }
const labelStyle = { fontSize: "0.75rem", fontWeight: "bold" }

const avatarStyle: React.CSSProperties = {
  padding: '0.25rem',
  backgroundColor: '#FFFFFF',
}

export const StandCard: FC<StandCardProps> = ({
  loading,
  id,
  isBusy,
  whoIsBusy,
  busyUntil,
  branch,
  comments,
  onClick,
  isUserStand, isCurrentUserStandsLimitEnabled,
}) => {
  const parseDate = busyUntil ? Date.parse(busyUntil) : ''
  const isBusyDateActual = parseDate > Date.now()
  const dateToDisplay = useMemo(() => busyUntil ? new Date(busyUntil).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }) : '', [busyUntil])

  const standLink = `https://dev${id}-beta.pcbltools.ru/`
  const isButtonDisabled = loading || isBusy && !isUserStand && isBusyDateActual
  const status = isBusy && isBusyDateActual ? statusTypeEnum.busy : statusTypeEnum.free
  const isStandBusy = status === statusTypeEnum.busy
  const branchName = useMemo(() => branch && branch?.length > 16 ? `${branch?.slice(0, 16)}...` : branch, [branch])

  const handleClick = () => {
    onClick()
    setOpenStandEvent(id)
  }

  return (
    <Card
      style={{ width: 300, marginTop: 16, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
      actions={[
        <Tooltip title={comments}>
          <CommentOutlined style={{ fontSize: '180%'}} hidden={!comments || !isStandBusy}/>
        </Tooltip>,
        <Button type="primary" disabled={isButtonDisabled || isCurrentUserStandsLimitEnabled} onClick={handleClick}>
          {isUserStand ? 'Освободить' : 'Занять'}
        </Button>,
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={<Avatar
            src="https://img.icons8.com/material/48/000000/server--v1.png"
            style={avatarStyle}
          />}
          description={<>
            <Descriptions
              contentStyle={itemStyle}
              labelStyle={labelStyle}
              column={1} size="small"
              title={
              <Button type="link" size='small' href={standLink} target="_blank" name="standId">
                {id}
              </Button>
            }>
              <Descriptions.Item
                label="Статус"
                style={isStandBusy ? statusBusyStyle : statusFreeStyle}
              >
                {status}
              </Descriptions.Item>
              {isStandBusy && (
                <>
                  <Descriptions.Item label="Branch" >
                    <Tooltip title={branch}>
                      {branchName}
                    </Tooltip>
                  </Descriptions.Item>
                  <Descriptions.Item label="Занят" >{whoIsBusy}</Descriptions.Item>
                  <Descriptions.Item label="Занят до" >{dateToDisplay}</Descriptions.Item>
                </>
              )}
            </Descriptions>
          </>}
        />
      </Skeleton>
    </Card>
  );
}
