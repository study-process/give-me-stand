import { useEffect } from 'react'
import { useStore } from 'effector-react';
import { StandsList } from "src/components/Stands";
import { $stands, $standsIsLoading, getStandsEvent } from "../../store/stands";
import { Spin } from "antd";
import { Page } from '../interfaces'


export const StandsPage = ({ isVisible }: Page) => {
  const isLoading = useStore($standsIsLoading)
  const stands = useStore($stands)

  getStandsEvent('/stands')

  if (isVisible) {
    return <>
      {isLoading && <Spin size="large" />}
      <StandsList stands={stands} isLoading={isLoading}/>
    </>
  }

  return null
}