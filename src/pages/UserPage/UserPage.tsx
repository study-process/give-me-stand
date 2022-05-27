import React, { useCallback, useMemo} from "react";
import { useStore } from 'effector-react';
import { StandsList } from "../../components/Stands";
import {
  $CurrentStands,
  $openStand,
  $standsIsLoading, deleteUserStandFromStoreEvent,
  getUserStandEvent
} from "src/store/stands";
import { Spin, Empty } from "antd";
import { Page } from '../interfaces'
import { FC, useState } from "react";
import { ModalSubmit } from "src/components/widgets/ModalSubmit/ModalSubmit";
import { useMutation } from "@apollo/client";
import { GET_STAND_BY_ID, RELEASE_STAND_BY_ID } from "src/gql";

export const UserPage: FC<Page> = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isStandsLoading = useStore($standsIsLoading)
  const userStands = useStore($CurrentStands)
  const standForRelease = useStore($openStand)
  const [ReleaseStandByID, { loading }] = useMutation(RELEASE_STAND_BY_ID)
  const isLoading = isStandsLoading || loading
  const findBusyUserStands = useMemo(() => userStands.find(stand => stand?.isBusy === true), [userStands])
  getUserStandEvent(userId)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = useCallback(() => {
    ReleaseStandByID({
      variables: { id: standForRelease, userId: userId},
      refetchQueries: [
        {query: GET_STAND_BY_ID,
          variables: { userId: userId}
        }
      ],
      awaitRefetchQueries: true,
    })
    deleteUserStandFromStoreEvent(standForRelease)
    setIsModalOpen(false)
  }, [standForRelease, userId])

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  return <>
    <ModalSubmit isVisible={isModalOpen} onSubmit={handleSubmit} onCancel={handleCancel} standId={standForRelease}/>
    {isLoading && !findBusyUserStands && <Spin size="large" />}
    {!isLoading && !findBusyUserStands &&
      (<Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Занятых стендов пока нет"
      />)
    }
    <StandsList stands={userStands} isLoading={isLoading} isUserStand onClick={handleClick}/>
  </>
}