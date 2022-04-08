import { useStore } from 'effector-react';
import { FC } from 'react';
import { StandsList } from "../../components/Stands";
import { $CurrentStand, $standsIsLoading, getUserStandEvent } from "../../store/stands";
import { Spin } from "antd";

export const UserPage: FC = () => {
  const isLoading = useStore($standsIsLoading)
  getUserStandEvent(123)
  const userStands = useStore($CurrentStand)

  return <>
    {isLoading && <Spin size="large" />}
    {!isLoading && !userStands.length && 'Занятых стендов нет'}
    <StandsList stands={userStands} isLoading={isLoading} isUserStand/>
  </>
}