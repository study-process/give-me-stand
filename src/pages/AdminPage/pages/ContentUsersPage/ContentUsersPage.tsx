import React, { FC, useEffect, useState } from "react";
import { useStore } from 'effector-react'
import { Avatar, Button, List, Statistic, Popconfirm, Menu, MenuProps, Form, Dropdown, Space, Tag, Spin } from "antd";
import './styles.css'
import {
  $availableTeamsForUserList,
  $selectedTeamUsers,
  getAllUsersEvent,
  setSelectedTeamUsers
} from "../../../../store/Users";
import { DownOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { $currentUser } from "../../../../store";
import { $serverResponseIsLoading, serServerResponseLoadingEvent } from "../../../../store/serverResponse";
import { CREATE_USER, GET_ALL_USERS } from "../../../../gql";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../../../gql/mutations/DeleteUser";
import { ERROR_DUPLICATE_USER_LOGIN } from "../../../../constants";
import { UserModal } from "./components";
import { UserFormModal } from "../../interfaces";

export const ContentUsersPage: FC = () => {
  const { team } = useStore($currentUser)
  const serverResponseIsLoading = useStore($serverResponseIsLoading)
  const availableTeamsForUserList = useStore($availableTeamsForUserList)
  const { teamUsers, currentUsersTeam } = useStore($selectedTeamUsers) ?? {}

  const [isUserModalVisible, setIsUserModalVisible] = useState(false)
  const [form] = Form.useForm();

  getAllUsersEvent()

  const [DeleteUser, {error, data}] = useMutation(DELETE_USER)
  const [CreateUser, {error: createError, data: createData}] = useMutation(CREATE_USER)

  const handleSelectTeam: MenuProps['onClick'] = e => {
    setSelectedTeamUsers(e.key)
  };

  const handleDelete = (userId: number) => () => {
    if (!!userId) {
      serServerResponseLoadingEvent(true)
      DeleteUser({
        variables: {
          id: userId
        },
        refetchQueries: [
          {query: GET_ALL_USERS
          },],
        awaitRefetchQueries: true,
      })
    }
  };

  const handleModalOpen = () => setIsUserModalVisible(true)
  const handleModalCancel = () => setIsUserModalVisible(false)
  const handleModalSubmit = (formValues: UserFormModal) => {
    serServerResponseLoadingEvent(true)
    CreateUser({
      variables: {
        username: formValues.username,
        login: formValues.login,
        isAdmin: formValues.isAdmin,
        matterMostLink: formValues.matterMostLink,
        team: formValues.team,
      },
      refetchQueries: [{query: GET_ALL_USERS }],
      awaitRefetchQueries: true,
    })
    setIsUserModalVisible(false)
  }

  const menu = (
    <Menu
      onClick={handleSelectTeam}
      items={availableTeamsForUserList?.map(
        team => ({
          label: team,
          key: team
        })
      )}
    />
  );

  useEffect(() => {
    if (data || createData || error || createError) {
      serServerResponseLoadingEvent(false)
    }
    if (error) {
      alert(`Ошибка: ${error}`)
    }
    if (createError && String(createError) === ERROR_DUPLICATE_USER_LOGIN) {
      alert("Ошибка: Пользователь с таким логином уже существует!")
    }
  }, [error, data, createData, createError])

  return <div className="admin-page__users-container">

    {isUserModalVisible && <UserModal isVisible={isUserModalVisible} onSubmit={handleModalSubmit} onCancel={handleModalCancel} />}

    <Spin spinning={serverResponseIsLoading} delay={500}>
      <Form
        layout='inline'
        form={form}
        style={{marginBottom: '2rem'}}
      >
        <Form.Item>
          <Dropdown overlay={menu}>
            <Button>
              <Space>
                {`Пользователи команды: ${currentUsersTeam}`}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleModalOpen}>Добавить пользователя</Button>
        </Form.Item>
      </Form>
      {!!teamUsers?.length && (
        <>
          {`${currentUsersTeam}` !== `${team}` &&
            <Tag
              color="volcano"
              style={{
                marginBottom: '1rem'
              }}>Не моя команда</Tag>}</>
      )}
      {!!teamUsers?.length && <Statistic title="Всего пользователей команды" value={teamUsers?.length} style={{ marginBottom: "2rem" }} />}
      <List
        itemLayout="horizontal"
        dataSource={teamUsers}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/jack" />}
              title={item.username}
              description={`Команда: ${item.team} · Админ: ${item.isAdmin ? 'Да' : 'Нет'} · Логин: ${item.login}`}
            />
            <div className="user-controls">
              <Button type="primary" disabled={true} >Редактировать</Button>
              <Popconfirm
                placement="bottomRight"
                title={`Вы уверены, что хотите удалить пользователя ${item?.username} команды ${item?.team}?`}
                onConfirm={handleDelete(item.id)}
                okText="Подтвердить"
                cancelText="Отмена"
                icon={<QuestionCircleOutlined />}
              >
                <Button type="primary" danger>Удалить</Button>
              </Popconfirm>
            </div>
          </List.Item>
        )}
      />
    </Spin>

  </div>
}