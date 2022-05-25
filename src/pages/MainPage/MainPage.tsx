import { FC, useState, useCallback } from 'react';
import { useStore } from 'effector-react'
import { UserPage, StandsPage } from 'src/pages';
import { Header } from 'src/components/Header'
import { ErrorPage } from "../ErrorPage";
import { $currentUser } from "../../store";

export const MainPage: FC = () => {
  const [isUserPageVisible, setIsUserPageVisible] = useState(true)
  const handleChange = () => setIsUserPageVisible(!isUserPageVisible)
  const currenUser = useStore($currentUser)

  //TODO: delete
  console.log(currenUser, 'currenUser')

  if (!currenUser.userId) {
    return <ErrorPage />
  }

  return (
    <>
      <Header onChange={handleChange} />
      {isUserPageVisible && <UserPage userId={currenUser.userId}/>}
      {!isUserPageVisible && <StandsPage />}
    </>
  )
}