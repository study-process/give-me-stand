import { useNavigate } from 'react-router-dom'
import { useStore } from 'effector-react'
import { checkIsAdmin } from 'src/utils/checkIsAdmin'
import { Form, Input, Button, Alert, Space, Typography } from 'antd'
import { LoginCheck } from 'src/interfaces'
import {
  CurrentRoleTypesEnum,
  setCurrentRoleEvent,
  $displayErrorWarning,
  setErrorWarningEvent,
} from 'src/store'
import { adminLoginMessageTypesEnum } from './constants'
import { NavigationPageTypesEnum } from '../../constants'

const { Text } = Typography;

export const LoginPage = () => {
  const navigate = useNavigate()
  const errorWarningMessage = useStore($displayErrorWarning)

  const handleFinish = (values: LoginCheck) => {
    if (checkIsAdmin({ ...values })) {
      setCurrentRoleEvent(CurrentRoleTypesEnum.admin)
      navigate(NavigationPageTypesEnum.adminPage)
    }
    setErrorWarningEvent()
  }

  const handleFinishFailed = () => {
    setErrorWarningEvent()
  }

  return (
    <Space direction="vertical" size={32} align="center">
      <Text code >Give Me Stand</Text>
      {errorWarningMessage && (
        <Alert message={adminLoginMessageTypesEnum.incorrect} type="error" />
      )}

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: `${adminLoginMessageTypesEnum.loginIsEmpty}`,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: `${adminLoginMessageTypesEnum.passwordIsEmpty}`,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}
