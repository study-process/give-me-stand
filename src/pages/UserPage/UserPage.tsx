import { useStore } from 'effector-react';
import { StandsList } from "../../components/Stands";
import { $CurrentStand, $standsIsLoading, getStandsEvent, getUserStandEvent } from "../../store/stands";
import { Spin } from "antd";
import { Page } from '../interfaces'
import { FC } from "react";

export const UserPage: FC<Page> = ({ userId }) => {
  const isLoading = useStore($standsIsLoading)
  const userStands = useStore($CurrentStand)
  getUserStandEvent(userId)

  return <>
    {isLoading && <Spin size="large" />}
    {!isLoading && !userStands.length && 'Занятых стендов нет'}
    {!isLoading && <StandsList stands={userStands} isLoading={isLoading} isUserStand />}
  </>
}