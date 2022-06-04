import React, { FC } from 'react';
import { Tooltip } from 'antd';
const matterMostMessageLinkRoot = 'https://mm.pcbltools.ru/slack-export/messages/'

export const MatterMostLink: FC<
  {
    userMMName?: string,
    userName?: string,
  }
  > = ({userMMName, userName}) => {
  return <Tooltip title={`Написать ${userName} в MatterMost`}>
    <a href={matterMostMessageLinkRoot + userMMName} target="_blank">
      {userName}
    </a>
  </Tooltip>
}