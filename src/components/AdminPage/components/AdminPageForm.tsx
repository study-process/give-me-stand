import { FC } from 'react'
import { Form, Input, Button, Space, Typography } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { AdminPanelFormProps } from 'src/interfaces'
import { StoreValue } from 'rc-field-form/lib/interface'
import { HandleFinishProps } from './interfaces'
import { ButtonTextTypesEnum } from 'src/constants'
import { AdminFormMessageTypesEnum } from './constants'

const { Title } = Typography

export const AdminPageForm: FC<AdminPanelFormProps> = ({
  title,
  placeholder,
}) => {
  const handleFinish = (values: HandleFinishProps) => {
    //TODO полученные значения надо передавать в БД, console.log удалить
    console.log('Received values of form:', values)
  }

  const handleClickAddElement =
    (method: (defaultValue?: StoreValue, insertIndex?: number) => void) => () =>
      method()

  const handleClickRemoveElement =
    (method: (index: number | number[]) => void, value: number | number[]) =>
    () =>
      method(value)

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={handleFinish}
      autoComplete="off"
    >
      <Title level={2}>{title}</Title>
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: 'flex', marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'value']}
                  rules={[
                    {
                      required: true,
                      message: AdminFormMessageTypesEnum.emptyValue,
                    },
                  ]}
                >
                  <Input placeholder={placeholder} />
                </Form.Item>
                <MinusCircleOutlined
                  onClick={handleClickRemoveElement(remove, name)}
                />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={handleClickAddElement(add)}
                block
                icon={<PlusOutlined />}
              >
                Добавить
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {ButtonTextTypesEnum.submit}
        </Button>
      </Form.Item>
    </Form>
  )
}
