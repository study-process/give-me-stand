import React, { FC } from 'react';
import { Modal as ModalAntd } from 'antd';
import { useStore } from 'effector-react'
import { $isModalDisplayed, setModalUnVisibleEvent } from "src/store/commonWidgets";

export const Modal: FC = ({ children}) => {
  const isModalVisible = useStore($isModalDisplayed)

  const handleOk = () => {
    //TODO: заменить на отправку мутации в БД, чтобы стенд стал занятым
    console.log('стенд занят')
    setModalUnVisibleEvent()
  };

  const handleCancel = () => {
    setModalUnVisibleEvent()
  };

  return (
    <ModalAntd
      title="Внесите информацию"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText='Подтвердить'
      cancelText='Отмена'
      centered
    >
      {children}
    </ModalAntd>
  );
};
