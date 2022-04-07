import {  FC } from 'react'
import { StandCardProps } from './interfaces'
import { Skeleton, Card, Avatar, Button, Descriptions, Tooltip} from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import { statusTypeEnum } from "./constants";
import {statusBusyStyle, statusFreeStyle} from './styles'
import cc from "classcat"

const { Meta } = Card;
const itemStyle = { fontSize: "0.75rem" }
const labelStyle = { fontSize: "0.75rem", fontWeight: "bold" }

export const StandCard: FC<StandCardProps> = ({loading}) => {
  const standId = '1-01'
  const standLink = `https://dev${standId}-beta.pcbltools.ru/`
  const branch = `bug/EDU-103040.fix_edu_dsdfsfdsf_sdfdsf(sd2342234)`
  const whoIsBusy = 'Иванов И.'
  const busyUntil = '01.01.2021'
  const isBusy = true
  const comment = 'Не трогайте, пожалуйста, это мой!'

  const isButtonDisabled = loading || isBusy

  const status = isBusy ? statusTypeEnum.busy : statusTypeEnum.free

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <Tooltip title={comment}>
          <CommentOutlined style={{ fontSize: '180%'}}/>
        </Tooltip>,
        <Button type="primary" disabled={isButtonDisabled}>Занять</Button>,
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
              <Button type="link" size='small' href={standLink} target="_blank">
                {standId}
              </Button>
            }>
              <Descriptions.Item label="Branch" >
                <Tooltip title={branch}>
                  {`${branch.slice(0, 18)}...`}
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
