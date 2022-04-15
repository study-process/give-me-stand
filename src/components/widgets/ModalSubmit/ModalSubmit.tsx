import React, { FC } from 'react';
import { Modal as ModalAntd, Typography } from "antd";
import { useStore } from 'effector-react'
import { $isModalWarningDisplayed, setModalWarningUnVisibleEvent } from "src/store/commonWidgets";

export const ModalSubmit: FC = () => {
  const isModalVisible = useStore($isModalWarningDisplayed)

  const handleOk = () => {
    //TODO: заменить на отправку мутации в БД, чтобы стенд стал свободным
    console.log('стенд свободен')
    setModalWarningUnVisibleEvent()
  };

  const handleCancel = () => {
    setModalWarningUnVisibleEvent()
  };

  return (
    <ModalAntd
      title="Внести информацию"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText='Подтвердить'
      cancelText='Отмена'
      centered
    >
      <Typography>
        Вы уверены, что хотите освободить стенд?
      </Typography>
    </ModalAntd>
  );
};
