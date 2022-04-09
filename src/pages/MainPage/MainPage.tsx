import { FC, useState, useCallback } from 'react';
import { UserPage, StandsPage } from 'src/pages';
import { Header } from 'src/components/Header'

export const MainPage: FC = () => {
  const [isUserPageVisible, setIsUerPageVisible] = useState(true)

  const handleChange = useCallback(
    () => {
      setIsUerPageVisible(!isUserPageVisible)
    },
    [isUserPageVisible]
  );

  return (
    <>
      <Header onChange={handleChange}/>
      <UserPage isVisible={isUserPageVisible}/>
      <StandsPage isVisible={!isUserPageVisible} />
    </>
  )
}