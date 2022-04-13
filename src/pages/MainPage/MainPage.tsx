import { FC, useState } from 'react';
import { UserPage, StandsPage } from 'src/pages';
import { Header } from 'src/components/Header'
import { Modal } from "src/components/common/Modal/Modal";

export const MainPage: FC = () => {
  const [isUserPageVisible, setIsUserPageVisible] = useState(true)
  const userId = 123
  const handleChange = () => setIsUserPageVisible(!isUserPageVisible)

  return (
    <>
      <Modal />
      <Header onChange={handleChange}/>
      {isUserPageVisible && <UserPage userId={userId}/>}
      {!isUserPageVisible && <StandsPage />}
    </>
  )
}