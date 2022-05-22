import React, { FC } from 'react';
import { Modal as ModalAntd, Typography } from "antd";

export const ModalSubmit: FC<{
  isVisible: boolean,
  onSubmit: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined,
  onCancel: () => void,
  standId?: string,
  title?: string,
  text?: string,
}> = ({ isVisible , onSubmit, onCancel, standId, title, text}) => {

  return (
    <ModalAntd
      title={title}
      visible={isVisible}
      onOk={onSubmit}
      onCancel={onCancel}
      okText='Подтвердить'
      cancelText='Отмена'
      centered
    >
      <Typography>
        {standId && `Вы уверены, что хотите освободить стенд ${standId}?`}
        {text}
      </Typography>
    </ModalAntd>
  );
};
