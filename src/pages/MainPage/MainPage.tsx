import { FC, useState, useCallback } from 'react';
import { useStore } from 'effector-react'
import { UserPage, StandsPage } from 'src/pages';
import { Header } from 'src/components/Header'
import { ErrorPage } from "../../components/ErrorPage";
import { $currentUser } from "../../store";
import { setLogoutModalVisibleEvent } from "../../store/commonWidgets";

export const MainPage: FC = () => {
  const [isUserPageVisible, setIsUserPageVisible] = useState(true)
  const handleChange = () => setIsUserPageVisible(!isUserPageVisible)
  const currenUser = useStore($currentUser)

  const handleExitButtonClick = useCallback(() => {
    setLogoutModalVisibleEvent(true)
  }, [])

  if (!currenUser.userId) {
    return <ErrorPage />
  }

  return (
    <>
      <Header onChange={handleChange} onExitButtonClick={handleExitButtonClick}/>
      {isUserPageVisible && <UserPage userId={currenUser.userId}/>}
      {!isUserPageVisible && <StandsPage />}
    </>
  )
}