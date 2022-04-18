import React, { FC } from 'react';
import { Modal as ModalAntd, Typography } from "antd";

export const ModalSubmit: FC<{
  isVisible: boolean,
  onSubmit: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined,
  onCancel: () => void,
  standId?: string,
}> = ({ isVisible , onSubmit, onCancel, standId}) => {

  return (
    <ModalAntd
      title="Внести информацию"
      visible={isVisible}
      onOk={onSubmit}
      onCancel={onCancel}
      okText='Подтвердить'
      cancelText='Отмена'
      centered
    >
      <Typography>
        {`Вы уверены, что хотите освободить стенд ${standId}?`}
      </Typography>
    </ModalAntd>
  );
};
