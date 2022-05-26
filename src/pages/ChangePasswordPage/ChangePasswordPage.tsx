import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';

export const ChangePasswordPage: FC = () => {
  const onFinish = (values: {
    password?: string,
    password_repeat?: string,
  }) => {
   if (values.password === values.password_repeat) {
     console.log('success', values.password === values.password_repeat);
   }
  };

  const onFinishFailed = (errorInfo: {}) => {
    console.log('Failed:', errorInfo);
  };

  return <div>
    <p style={{ marginBottom: '4rem', fontWeight: 'bold', color: '#d92e18' }}>
      Необходимо сменить транспортный пароль для доступа к стендам
    </p>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{width: '28rem'}}
    >
      <Form.Item
        label="Новый пароль"
        name="password"
        rules={[{ required: true, message: 'не менее 6 символов', min: 6}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Повторите пароль"
        name="password_repeat"
        rules={[{ required: true, message: 'не менее 6 символов', min: 6 }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Сменить пароль
        </Button>
      </Form.Item>
    </Form>
  </div>
}