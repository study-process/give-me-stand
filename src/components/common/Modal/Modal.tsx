import React, { FC } from 'react';
import { DatePicker, Form, Input, Modal as ModalAntd, Switch } from "antd";
import { useStore } from 'effector-react'
import { $isModalDisplayed, setModalUnVisibleEvent } from "src/store/commonWidgets";

const disabledPeriod = () => {
 const today = Date.now();
 const maxDate = new Date(today + 7)
  return maxDate
}

export const Modal: FC = ({ children}) => {
  const isModalVisible = useStore($isModalDisplayed)
  const standId = '1-01'
  const whoIsBusy = 'Иванов Иван'

  const today = Date.now();
  const maxDate = new Date(today + 7)

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
      title="Внести информацию"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText='Подтвердить'
      cancelText='Отмена'
      centered
    >
      <Form
        labelCol={{ span: 10 }}
        layout="horizontal"
        labelAlign='right'
      >
        <Form.Item label="Номер стенда: ">
          <Input value={standId} disabled />
        </Form.Item>
        <Form.Item label="Ветка: " required >
          <Input />
        </Form.Item>
        <Form.Item label="Занял: ">
          <Input value={whoIsBusy} disabled/>
        </Form.Item>
        <Form.Item label="Занять до: " required >
          <DatePicker

          />
        </Form.Item>
        <Form.Item label="Можно проксироваться: " valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Комментарии: ">
          <Input />
        </Form.Item>
      </Form>
    </ModalAntd>
  );
};
