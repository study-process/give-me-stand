import React, { useCallback } from "react";
import { useStore } from 'effector-react';
import { StandsList } from "../../components/Stands";
import {
  $CurrentStand,
  $openStand,
  $standsIsLoading,
  getUserStandEvent,
} from "src/store/stands";
import { Spin } from "antd";
import { Page } from '../interfaces'
import { FC, useState } from "react";
import { ModalSubmit } from "src/components/widgets/ModalSubmit/ModalSubmit";
import { useMutation } from "@apollo/client";
import { GET_STAND_BY_ID, RELEASE_STAND_BY_ID } from "src/gql";

export const UserPage: FC<Page> = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isStandsLoading = useStore($standsIsLoading)
  const userStands = useStore($CurrentStand)
  const standForRelease = useStore($openStand)
  const [ReleaseStandByID, { loading }] = useMutation(RELEASE_STAND_BY_ID)
  const isLoading = isStandsLoading || loading
  getUserStandEvent(userId)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = useCallback(() => {
    ReleaseStandByID({
      variables: { id: standForRelease },
      refetchQueries: [
        {query: GET_STAND_BY_ID,
          variables: { userId: userId}
        }
      ],
      awaitRefetchQueries: true,
    })
    setIsModalOpen(false)
  }, [standForRelease, userId])

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  return <>
    <ModalSubmit isVisible={isModalOpen} onSubmit={handleSubmit} onCancel={handleCancel} standId={standForRelease}/>
    {isLoading && userStands.length === 0 && <Spin size="large" />}
    {!isLoading && userStands.length === 0 && 'Занятых стендов нет'}
    <StandsList stands={userStands} isLoading={isLoading} isUserStand onClick={handleClick}/>
  </>
}