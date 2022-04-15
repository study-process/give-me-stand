import { FC, useState } from 'react';
import { UserPage, StandsPage } from 'src/pages';
import { Header } from 'src/components/Header'
import { Modal } from "src/components/widgets/Modal/Modal";
import { ModalSubmit } from "src/components/widgets/ModalSubmit/ModalSubmit";

export const MainPage: FC = () => {
  const [isUserPageVisible, setIsUserPageVisible] = useState(true)
  const userId = 123
  const handleChange = () => setIsUserPageVisible(!isUserPageVisible)

  return (
    <>
      <ModalSubmit/>
      <Modal />
      <Header onChange={handleChange}/>
      {isUserPageVisible && <UserPage userId={userId}/>}
      {!isUserPageVisible && <StandsPage />}
    </>
  )
}