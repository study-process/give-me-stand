import { FC, useEffect, useState } from 'react';
import { useStore } from 'effector-react'
import useLocalStorage from "use-local-storage";
import { UserPage, StandsPage } from 'src/pages';
import { Header } from 'src/components/Header'
import { ErrorPage } from "../ErrorPage";
import { $currentUser, currentUser, setCurrentUserEvent } from "../../store";
import { ChangePasswordPage } from "../ChangePasswordPage";
import { LOCAL_STORAGE_USER } from '../../constants'

export const MainPage: FC = () => {
  const [isUserPageVisible, setIsUserPageVisible] = useState(true)
  const [localStorageUser, setLocalStorageUser] = useLocalStorage<currentUser | null>(LOCAL_STORAGE_USER, null)
  const handleChange = () => setIsUserPageVisible(!isUserPageVisible)
  const user = useStore($currentUser)

  console.log(user)

  useEffect(() => {
    if (user.userId) {
      setLocalStorageUser(user)
    }
  }, [user]);

  useEffect(() => {
    if (!user.userId && localStorageUser?.userId) {
      setCurrentUserEvent({
        login: localStorageUser.login,
        userId: localStorageUser.userId,
        username: localStorageUser.username,
        team: localStorageUser.team,
        maxStandsCount: localStorageUser.maxStandsCount,
        isMaxUsersStandsCountEnabled: localStorageUser.isMaxUsersStandsCountEnabled,
        isTransferPasswordChanged: localStorageUser.isTransferPasswordChanged,
        accessToken: localStorageUser.accessToken,
        adminSecret: localStorageUser.adminSecret,
        matterMostLink: localStorageUser.matterMostLink,
        isAdmin: localStorageUser.isAdmin,
      })
    }
  }, [user]);

  if (!user.userId && !localStorageUser?.userId) {
    return <ErrorPage />
  }

  if (!user.isTransferPasswordChanged && !localStorageUser?.isTransferPasswordChanged) {
    return <ChangePasswordPage />
  }

  return (
    <>
      <Header onChange={handleChange} />
      {isUserPageVisible && <UserPage userId={user.userId || localStorageUser?.userId}/>}
      {!isUserPageVisible && <StandsPage />}
    </>
  )
}