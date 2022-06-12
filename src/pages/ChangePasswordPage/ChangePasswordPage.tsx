import React, { FC, useEffect, useState } from "react";
import { Form, Input, Button, Spin, Alert } from 'antd';
import { useMutation } from "@apollo/client";
import { CHANGE_USER_PASSWORD } from "../../gql";
import { useStore } from "effector-react";
import { $currentUser, resetCurrentUserEvent } from "../../store";
import sha256 from 'crypto-js/sha256';
import { useNavigate } from "react-router-dom";
import { NavigationPageTypesEnum, ROOT_URL } from "../../constants";

export const ChangePasswordPage: FC = () => {
  const { userId } = useStore($currentUser)
  const [isPasswordNotMatched, setIsPasswordNotMatched] = useState(false)
  const navigate = useNavigate()
  const [ChangeUserPassword, {loading, data}] = useMutation(CHANGE_USER_PASSWORD)

  const handleClickToLogin = () => {
    resetCurrentUserEvent()
    navigate(ROOT_URL + NavigationPageTypesEnum.LoginPage)
  }

  const handleFinish = (values: {
    password?: string,
    password_repeat?: string,
  }) => {
    if (values.password !== values.password_repeat) {
      setIsPasswordNotMatched(true)
    }
    if (values.password === values.password_repeat) {
      setIsPasswordNotMatched(false)
      if (values.password) {
        const hashPassword = (sha256(values.password)).toString()
        ChangeUserPassword({
          variables: {
            id: userId,
            password: hashPassword,
          },
        })
      }
    }
  };

  const onFinishFailed = (errorInfo: {}) => {
    console.log('Failed:', errorInfo);
  };

  return <div>
    {isPasswordNotMatched && !loading && <Alert
      style={{ marginBottom: '2rem'}}
      message="Пароли не совпадают"
      type="warning"
      showIcon
    />}
    {!data && <Spin spinning={loading} delay={500}>
      <p style={{ marginBottom: "4rem", fontWeight: "bold", color: "#d92e18" }}>
        Необходимо сменить транспортный пароль для доступа к стендам
      </p>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ width: "28rem" }}
      >
        <Form.Item
          label="Новый пароль"
          name="password"
          rules={[{ required: true, message: "не менее 6 символов", min: 6 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Повторите пароль"
          name="password_repeat"
          rules={[{ required: true, message: "не менее 6 символов", min: 6 }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Сменить пароль
          </Button>
        </Form.Item>
      </Form>
    </Spin>}
    {data && <Alert
      message="Пароль успешно изменен"
      type="success"
      showIcon
      action={
        <Button size="small" type="link" onClick={handleClickToLogin} >
          Вернуться ко входу
        </Button>
      }
    />}
  </div>
}