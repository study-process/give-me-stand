import React, { FC, useState } from "react";
import { Form, Input, Button, Spin, Alert } from 'antd';
import { useMutation } from "@apollo/client";
import { CHANGE_USER_PASSWORD } from "../../gql";
import { useStore } from "effector-react";
import { $currentUser, currentUser } from "../../store";
import sha256 from 'crypto-js/sha256';
import { LOCAL_STORAGE_USER } from "../../constants";
import useLocalStorage from "use-local-storage";

export const ChangePasswordPage: FC = () => {
  const { userId } = useStore($currentUser)
  const user = useStore($currentUser)
  const [isPasswordNotMatched, setIsPasswordNotMatched] = useState(false)
  const [localStorageUser, setLocalStorageUser] = useLocalStorage<currentUser | null>(LOCAL_STORAGE_USER, user)
  const [ChangeUserPassword, {loading, data}] = useMutation(CHANGE_USER_PASSWORD)

  const handleClickForward = () => {
    window.location.reload()
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
          onCompleted: () => {
            setLocalStorageUser({...user, isTransferPasswordChanged: "true"})
          }
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
          <Input.Password />
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
        <Button size="small" type="link" onClick={handleClickForward} >
          Вперед
        </Button>
      }
    />}
  </div>
}