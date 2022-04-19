import { FC, useCallback, useEffect, useState } from "react";
import { useStore } from 'effector-react';
import { StandsList } from "src/components/Stands";
import {
  $openStandToTake,
  $stands,
  $standsIsLoading,
  getStandsEvent,
  $openStand,
  resetOpenStandEvent
} from "src/store/stands";
import { Spin } from "antd";
import { Page } from '../interfaces'
import { Modal } from "src/components/widgets/Modal/Modal";
import { GET_ALL_STANDS, GET_STAND_BY_ID, TAKE_STAND_BY_ID } from "../../gql";
import { useMutation } from "@apollo/client";

export const StandsPage: FC<Page> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isStandsLoading = useStore($standsIsLoading)
  const stands = useStore($stands)
  console.log('isStandsLoading', isStandsLoading)

  const isLoading = isStandsLoading
  getStandsEvent('/stands')

  const handleClick = () => {
    resetOpenStandEvent()
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  const handleSubmit = useCallback(() => {
    setIsModalOpen(false)
  }, [isModalOpen])

  return <>
    <Modal isVisible={isModalOpen} onSubmit={handleSubmit} onCancel={handleCancel} />
    {isLoading && stands.length === 0 && <Spin size="large" />}
    <StandsList stands={stands} isLoading={isLoading} onClick={handleClick}/>
  </>
}