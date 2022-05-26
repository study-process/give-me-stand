import { FC, useCallback, useState } from "react";
import { useStore } from 'effector-react';
import { StandsList } from "src/components/Stands";
import {
  $stands,
  $standsIsLoading,
  getStandsEvent, getUserStandEvent,
  resetOpenStandEvent
} from "src/store/stands";
import { Spin } from "antd";
import { Page } from '../interfaces'
import { Modal } from "src/components/widgets/Modal/Modal";
import { $currentUser } from "../../store";

export const StandsPage: FC<Page> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {userId} = useStore($currentUser) ?? {}
  const isStandsLoading = useStore($standsIsLoading)
  const stands = useStore($stands)

  const isLoading = isStandsLoading
  getStandsEvent('/stands')
  getUserStandEvent(userId)

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