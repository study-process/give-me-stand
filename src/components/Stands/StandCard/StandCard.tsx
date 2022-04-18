import {  FC } from 'react'
import { StandCardProps } from './interfaces'
import { Skeleton, Card, Avatar, Button, Descriptions, Tooltip} from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import { statusTypeEnum } from "./constants";
import {statusBusyStyle, statusFreeStyle} from './styles'
import { setOpenStandEvent } from "src/store/stands";

const { Meta } = Card;
const itemStyle = { fontSize: "0.75rem" }
const labelStyle = { fontSize: "0.75rem", fontWeight: "bold" }

export const StandCard: FC<StandCardProps> = ({
  loading,
  id,
  isBusy,
  whoIsBusy,
  busyUntil,
  branch,
  comments,
  onClick,
  isUserStand,
}) => {

  const standLink = `https://dev${id}-beta.pcbltools.ru/`
  const isButtonDisabled = loading || isBusy && !isUserStand
  const status = isBusy ? statusTypeEnum.busy : statusTypeEnum.free
  const setOpenStand = () => id ? setOpenStandEvent(id) : null

  const handleClick = () => {
    setOpenStand()
    onClick()
  }

  return (
    <Card
      style={{ width: 300, marginTop: 16, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
      actions={[
        <Tooltip title={comments}>
          <CommentOutlined style={{ fontSize: '180%'}} hidden={!comments}/>
        </Tooltip>,
        <Button type="primary" disabled={isButtonDisabled} onClick={handleClick}>
          {isUserStand ? 'Освободить' : 'Занять'}
        </Button>,
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={<Avatar src="https://img.icons8.com/material/48/000000/server--v1.png" />}
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
              <Descriptions.Item label="Branch" >
                <Tooltip title={branch}>
                  {`${branch?.slice(0, 18)}...`}
                </Tooltip>
              </Descriptions.Item>
              <Descriptions.Item
                label="Статус"
                style={isBusy ? statusBusyStyle : statusFreeStyle}
              >
                {status}
              </Descriptions.Item>
              {isBusy && (
                <>
                  <Descriptions.Item label="Занят" >{whoIsBusy}</Descriptions.Item>
                  <Descriptions.Item label="Занят до" >{busyUntil}</Descriptions.Item>
                </>
              )}
            </Descriptions>
          </>}
        />
      </Skeleton>
    </Card>
  );
}
