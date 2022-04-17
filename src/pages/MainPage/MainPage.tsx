import { FC, useState } from 'react';
import { UserPage, StandsPage } from 'src/pages';
import { Header } from 'src/components/Header'

export const MainPage: FC = () => {
  const [isUserPageVisible, setIsUserPageVisible] = useState(true)
  const handleChange = () => setIsUserPageVisible(!isUserPageVisible)

  return (
    <>
      <Header onChange={handleChange}/>
      {isUserPageVisible && <UserPage userId={123}/>}
      {!isUserPageVisible && <StandsPage />}
    </>
  )
}