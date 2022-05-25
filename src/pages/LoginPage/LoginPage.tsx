import { useNavigate } from 'react-router-dom'
import { useStore } from 'effector-react'
import { Form, Input, Button, Alert, Space, Typography, Spin } from 'antd'
import { LoginCheck } from 'src/interfaces'
import {
  $displayErrorWarning,
  setErrorWarningEvent, setCurrentUserEvent
} from "src/store";
import { adminLoginMessageTypesEnum } from './constants'
import { NavigationPageTypesEnum } from '../../constants'
import axios from "axios";
import {
  $serverResponseIsLoading,
  serServerResponseEvent,
  serServerResponseLoadingEvent,
  serverResponse, setServerResponseErrorEvent
} from "../../store/serverResponse";
import { AUTHORIZED_URL } from '../../constants'

const { Text } = Typography;

export const LoginPage = () => {
  const navigate = useNavigate()
  const errorWarningMessage = useStore($displayErrorWarning)
  const serverResponseIsLoading = useStore($serverResponseIsLoading)

  const handleFinish = (values: LoginCheck) => {
    serServerResponseLoadingEvent(true)
    axios.post(AUTHORIZED_URL, {
      "username": `${values.username}`,
      "password": `${values.password}`,
    }).then(response => {
      serServerResponseEvent(response)
      serServerResponseLoadingEvent(false)
      if (response.data !== serverResponse.NOT_AUTHORIZED && response.status === 200) {
        setCurrentUserEvent({
          login: response.data.login,
          userId: response.data.userId,
          username: response.data.username,
          team: response.data.team,
          maxStandsCount: response.data.maxStandsCount,
          isMaxUsersStandsCountEnabled: response.data.isMaxUsersStandsCountEnabled,
          isTransferPasswordChanged: response.data.isTransferPasswordChanged,
          accessToken: response.data.accessToken,
          adminSecret: response.data.adminSecret,
        })
        navigate(NavigationPageTypesEnum.MainPage)
      }
      if (response.data === serverResponse.NOT_AUTHORIZED) {
        setServerResponseErrorEvent(response.data)
        setErrorWarningEvent()
      }
    })
  }

  const handleFinishFailed = () => {
    setErrorWarningEvent()
  }

  return (
    <Spin spinning={serverResponseIsLoading} delay={500}>
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
    </Spin>
  )
}
