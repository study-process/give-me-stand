import React, { FC } from 'react';
import { DatePicker, Form, Input, Modal as ModalAntd, Switch } from "antd";
import { useStore } from 'effector-react'
import { $isModalDisplayed, setModalUnVisibleEvent } from "src/store/commonWidgets";
import moment from 'moment'

const disabledPeriodToStand = (current: moment.Moment) => {
  const startDate = moment().subtract(1, 'days');
  const endDate = moment().add(7, 'days');
  return current < startDate || current > endDate;
}

export const Modal: FC = () => {
  const isModalVisible = useStore($isModalDisplayed)
  const [form] = Form.useForm();

  const standId = '1-01'
  const whoIsBusy = 'Иванов Иван'

  const handleOk = () => {
    //TODO: заменить на отправку мутации в БД, чтобы стенд стал занятым
    form.submit()
    console.log('стенд занят')
    setModalUnVisibleEvent()
  };

  const handleSubmit = (values: {}) => {
    console.log(values)
  }

  const handleCancel = () => {
    setModalUnVisibleEvent()
    form.resetFields()
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
        form={form}
        onFinish={handleSubmit}
        labelCol={{ span: 10 }}
        layout="horizontal"
        labelAlign='right'
      >
        <Form.Item label="Номер стенда: " name="standId" initialValue={standId}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Ветка: " required name="branch">
          <Input />
        </Form.Item>
        <Form.Item label="Занял: " name="whoIsBusy" initialValue={whoIsBusy}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Занять до: " required name="busyUntil">
          <DatePicker
            disabledDate ={disabledPeriodToStand}
          />
        </Form.Item>
        <Form.Item label="Комментарии: " name="comments">
          <Input />
        </Form.Item>
      </Form>
    </ModalAntd>
  );
};
