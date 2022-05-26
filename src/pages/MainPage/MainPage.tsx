import { FC, useState } from 'react';
import { useStore } from 'effector-react'
import { UserPage, StandsPage } from 'src/pages';
import { Header } from 'src/components/Header'
import { ErrorPage } from "../ErrorPage";
import { $currentUser } from "../../store";
import { ChangePasswordPage } from "../ChangePasswordPage";

export const MainPage: FC = () => {
  const [isUserPageVisible, setIsUserPageVisible] = useState(true)
  const handleChange = () => setIsUserPageVisible(!isUserPageVisible)
  const {userId, isTransferPasswordChanged } = useStore($currentUser)

  if (!userId) {
    return <ErrorPage />
  }

  if (!isTransferPasswordChanged) {
    return <ChangePasswordPage />
  }

  return (
    <>
      <Header onChange={handleChange} />
      {isUserPageVisible && <UserPage userId={userId}/>}
      {!isUserPageVisible && <StandsPage />}
    </>
  )
}