import React, { FC } from "react";
import { Form, Input, Modal as ModalAntd, Switch } from "antd";
import { UserFormModal } from "../../../../interfaces";
import { useStore } from "effector-react";
import { $selectedTeamUsers } from "../../../../../../store/Users";

export const UserModal: FC<{
  isVisible: boolean,
  onSubmit: (formValues: UserFormModal) => void,
  onCancel: () => void,
}> = (
  { isVisible , onSubmit, onCancel }
) => {
  const { currentUsersTeam } = useStore($selectedTeamUsers) ?? {}
  const [form] = Form.useForm();

  const handleOk = () => {
    const formValues = form.getFieldsValue()
    if (!Object.entries(formValues).some(
      value => value.includes(undefined) && !value.includes('comments')
    )) {
      form.submit()
      onSubmit(formValues)
      form.resetFields()
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
        <Form.Item label="Команда: " required name="team" initialValue={currentUsersTeam}>
          <Input placeholder="указывается с учетом регистра" />
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
