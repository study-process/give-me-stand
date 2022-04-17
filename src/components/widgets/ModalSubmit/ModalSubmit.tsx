import React, { FC, useEffect, useState } from 'react';
import { Modal as ModalAntd, Typography } from "antd";
import { useStore } from 'effector-react'
import { $isModalWarningDisplayed, setModalWarningUnVisibleEvent } from "src/store/commonWidgets";
import { releaseStandEvent } from "../../../store/stands";

export const ModalSubmit: FC<{
  isVisible: boolean,
  onSubmit: () => void,
  onCancel: () => void,
}> = ({ isVisible , onSubmit, onCancel}) => {

  return (
    <ModalAntd
      title="Внести информацию"
      visible={isVisible}
      onOk={onSubmit}
      onCancel={onCancel}
      okText='Подтвердить'
      cancelText='Отмена'
      centered
    >
      <Typography>
        Вы уверены, что хотите освободить стенд?
      </Typography>
    </ModalAntd>
  );
};
