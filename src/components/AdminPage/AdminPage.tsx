import { FC, useEffect, useCallback } from 'react'
import { Space, Spin } from 'antd'
import { useStore } from 'effector-react'
import { AdminPageForm } from './components/AdminPageForm'
import { ErrorPage } from '../ErrorPage'
import {
  $accessByRole,
  $currentUser,
  $currentUserIsLoading,
  $isUserInDatabase,
  getUserByIdEvent,
  insertUserEvent,
  setUserNameEvent,
} from 'src/store'
import { adminFormTypesEnum } from './constants'

export const AdminPage: FC = () => {
  //TODO: перенести на страницу регистрации под студентом
  const { isAdmin } = useStore($accessByRole)
  const isUserDataLoading = useStore($currentUserIsLoading)

  if (!isAdmin) {
    return <ErrorPage />
  }

  const id = 999
  getUserByIdEvent(id)
  const isUserInDB = useStore($isUserInDatabase)

  useEffect(() => {
    if (isUserInDB === 0) {
      insertUserEvent({
        id: id,
        name: 'test3',
        nickname: 'test3_nick',
        node_id: `node_test_id ${id}`,
      })
    }
  }, [isUserInDB, id])

  setUserNameEvent('admin')
  const { name } = useStore($currentUser)

  insertUserEvent({
    id: id,
    name: 'test3',
    nickname: 'test3_nick',
    node_id: `node_test_id ${id}`,
  })

  return (
    <>
      {isUserDataLoading && <Spin size="large" />}
      {!isUserDataLoading && (
        <>
          <div>Привет, {name}!</div>
          <Space direction="vertical" size={80}>
            <AdminPageForm
              title={adminFormTypesEnum.teacherFormTitle}
              placeholder={adminFormTypesEnum.teacherFormPlaceholder}
            />
            <AdminPageForm
              title={adminFormTypesEnum.repositoryFormTitle}
              placeholder={adminFormTypesEnum.repositoryFormPlaceholder}
            />
          </Space>
        </>
      )}
    </>
  )
}
