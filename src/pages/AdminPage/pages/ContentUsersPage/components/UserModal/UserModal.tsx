import React, { FC, useEffect, useState } from "react";
import { DatePicker, Form, Input, Modal as ModalAntd, Radio, Switch } from "antd";
import { useStore } from "effector-react";
import { useMutation } from "@apollo/client";

export const UserModal: FC<{
  isVisible: boolean,
  onSubmit: () => void,
  onCancel: () => void,
}> = (
  { isVisible , onSubmit, onCancel }
) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    const formValues = form.getFieldsValue()
    if (!Object.entries(formValues).some(
      value => value.includes(undefined) && !value.includes('comments')
    )) {
      form.submit()
      console.log(formValues)
      //
      // setOpenStandToTakeEvent({
      //   id: standId,
      //   userId: userId,
      //   branch: formValues.branch,
      //   whoIsBusy: whoIsBusy,
      //   busyUntil: String(formValues.busyUntil),
      //   comments: formValues.comments,
      // })
      //
      // TakeStandByID({
      //   variables: {
      //     id: standId,
      //     userId: userId,
      //     branch: formValues?.branch,
      //     whoIsBusy: whoIsBusy,
      //     busyUntil: String(formValues.busyUntil),
      //     comments: formValues?.comments,
      //     matterMostLink: currenUser.matterMostLink,
      //   },
      //   refetchQueries: [
      //     {query: GET_ALL_STANDS
      //     },
      //     {query: GET_STAND_BY_ID,
      //       variables: { userId: userId}
      //     }
      //   ],
      //   awaitRefetchQueries: true,
      // })
      //
      // setIsStandsLoadingEvent(false)

      onSubmit()
      form.resetFields()
      return onSubmit()
    }
    else {
      alert('Необходимо заполнить все обязательные поля!')
    }
  };

  const handleCancel = () => {
    onCancel()
    form.resetFields()
  };

  return (
    <ModalAntd
      title="Информация о новом пользователе "
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText='Подтвердить'
      cancelText='Отмена'
      centered
    >
      <Form
        form={form}
        onFinishFailed={() => alert('error')}
        labelCol={{ span: 10 }}
        layout="horizontal"
        labelAlign='right'
      >
        <Form.Item label="Логин: " required name="login">
          <Input placeholder="используется при входе"/>
        </Form.Item>
        <Form.Item label="Имя: " required name="username">
          <Input placeholder="видят другие пользователи"/>
        </Form.Item>
        <Form.Item label="Команда: " required name="team">
          <Input placeholder="указывается с учетом регистра"/>
        </Form.Item>
        <Form.Item label="Ссылка на matterMost: " required name="matterMostLink">
          <Input placeholder="в формате @user"/>
        </Form.Item>
        <Form.Item label="Права Администратора: " valuePropName="checked" name="isAdmin" initialValue={false}>
          <Switch />
        </Form.Item>
      </Form>
    </ModalAntd>
  );
};
