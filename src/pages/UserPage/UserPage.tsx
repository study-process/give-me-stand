import { useStore } from 'effector-react';
import { StandsList } from "../../components/Stands";
import { $CurrentStand, $standsIsLoading, getUserStandEvent } from "../../store/stands";
import { Spin } from "antd";
import { Page } from '../interfaces'

export const UserPage = ({ isVisible }: Page) => {
  const isLoading = useStore($standsIsLoading)
  const userStands = useStore($CurrentStand)

  getUserStandEvent(123)

  if (isVisible) {
    return <>
      {isLoading && <Spin size="large" />}
      {!isLoading && !userStands.length && 'Занятых стендов нет'}
      <StandsList stands={userStands} isLoading={isLoading} isUserStand/>
    </>
  }

  return null
}