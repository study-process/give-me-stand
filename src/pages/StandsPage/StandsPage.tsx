import { FC } from 'react'
import { useStore } from 'effector-react';
import { StandsList } from "src/components/Stands";
import { $stands, $standsIsLoading, getStandsEvent } from "../../store/stands";
import { Spin } from "antd";
import { Page } from '../interfaces'
import { setModalVisibleEvent } from "../../store/commonWidgets";


export const StandsPage: FC<Page> = () => {
  const isLoading = useStore($standsIsLoading)
  const stands = useStore($stands)
  getStandsEvent('/stands')

  const handleClick = () => {
    setModalVisibleEvent()
  }

  return <>
    {isLoading && <Spin size="large" />}
    <StandsList stands={stands} isLoading={isLoading} onClick={handleClick}/>
  </>
}