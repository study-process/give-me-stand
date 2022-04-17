import { useEffect } from 'react';
import { useStore } from 'effector-react';
import { StandsList } from "../../components/Stands";
import {
  $CurrentStand,
  $standForRelease,
  $standsIsLoading,
  getUserStandEvent,
  releaseStandEvent, releaseUserStandEvent
} from "src/store/stands";
import { Spin } from "antd";
import { Page } from '../interfaces'
import { FC, useState } from "react";
import { ModalSubmit } from "src/components/widgets/ModalSubmit/ModalSubmit";
import { useMutation } from "@apollo/client";
import { RELEASE_STAND_BY_ID } from "src/gql";

export const UserPage: FC<Page> = ({ userId }) => {
  const isLoading = useStore($standsIsLoading)
  const userStands = useStore($CurrentStand)
  const standForRelease = useStore($standForRelease)
  const [isModalOpen, setIsModalOpen] = useState(false)
  getUserStandEvent(123)
  console.log(userStands)

  const [ReleaseStandByID, { loading }] = useMutation(RELEASE_STAND_BY_ID)

  useEffect(() => {
    console.log('стэнд для освобождения изменился на', standForRelease)
    getUserStandEvent(userId)
  }, [standForRelease]);

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = () => {
    console.log('стенд свободен')
    releaseStandEvent('1-01')
    ReleaseStandByID({variables: { id: '1-01' }})
    releaseUserStandEvent('1-01')
    setIsModalOpen(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  return <>
    <ModalSubmit isVisible={isModalOpen} onSubmit={handleSubmit} onCancel={handleCancel}/>
    {isLoading && <Spin size="large" />}
    {!isLoading && !userStands.length && !loading && 'Занятых стендов нет'}
    {!isLoading && !loading && userStands.length > 0 && <StandsList stands={userStands} isLoading={isLoading} isUserStand onClick={handleClick}/>}
  </>
}