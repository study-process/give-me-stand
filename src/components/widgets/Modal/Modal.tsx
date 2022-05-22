import React, { FC, useEffect } from "react";
import { DatePicker, Form, Input, Modal as ModalAntd, Typography } from "antd";
import moment from 'moment'
import {
  $openStand,
  resetOpenStandEvent,
  setIsStandsLoadingEvent,
  setOpenStandToTakeEvent
} from "../../../store/stands";
import { useStore } from "effector-react";
import { GET_ALL_STANDS, GET_STAND_BY_ID, TAKE_STAND_BY_ID } from "../../../gql";
import { useMutation } from "@apollo/client";
import { $currentUser } from "../../../store";

const disabledPeriodToStand = (current: moment.Moment) => {
  const startDate = moment().subtract(0, 'days');
  const endDate = moment().add(7, 'days');
  return current < startDate || current > endDate;
}

export const Modal: FC<{
  isVisible: boolean,
  onSubmit: () => void,
  onCancel: () => void,
}> = (
  { isVisible , onSubmit, onCancel }
) => {
  const [form] = Form.useForm();
  const currenUser = useStore($currentUser)
  const [TakeStandByID, {loading, error, data}] = useMutation(TAKE_STAND_BY_ID)

  useEffect(() => {
    if (loading) {
      setIsStandsLoadingEvent(true)
    }
  }, [loading])

  useEffect(() => {
    if (error || data) {
      setIsStandsLoadingEvent(false)
    }
  }, [error])

  const standId = useStore($openStand)
  const whoIsBusy = currenUser.username ?? ''
  const userId = currenUser.userId ?? 0

  const handleOk = () => {
    form.submit()
    const formValues = form.getFieldsValue()

    setOpenStandToTakeEvent({
      id: standId,
      userId: userId,
      branch: formValues.branch,
      whoIsBusy: whoIsBusy,
      busyUntil: String(formValues.busyUntil),
      comments: formValues.comments,
    })

    TakeStandByID({
      variables: {
        id: standId,
        userId: userId,
        branch: formValues?.branch,
        whoIsBusy: whoIsBusy,
        busyUntil: String(formValues.busyUntil),
        comments: formValues?.comments,
      },
      refetchQueries: [
        {query: GET_ALL_STANDS
        },
        {query: GET_STAND_BY_ID,
          variables: { userId: userId}
        }
      ],
      awaitRefetchQueries: true,
    })

    setIsStandsLoadingEvent(false)

    onSubmit()
    form.resetFields()
    return onSubmit()
  };

  const handleCancel = () => {
    onCancel()
    form.resetFields()
    resetOpenStandEvent()
  };

  return (
    <ModalAntd
      title="Внести информацию"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText='Подтвердить'
      cancelText='Отмена'
      centered
    >
      <Form
        form={form}
        onFinishFailed={() => alert('error')}
        labelCol={{ span: 10 }}
        layout="horizontal"
        labelAlign='right'
      >
        <Typography.Paragraph strong style={{
          display: 'flex',
          justifyContent: 'center'
        }}
        >
          Номер стенда: {standId}
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          Занял: {whoIsBusy}
        </Typography.Paragraph>
        <Form.Item label="Ветка: " required name="branch">
          <Input />
        </Form.Item>
        <Form.Item label="Занять до: " required name="busyUntil">
          <DatePicker
            disabledDate ={disabledPeriodToStand}
          />
        </Form.Item>
        <Form.Item label="Комментарии: " name="comments">
          <Input />
        </Form.Item>
      </Form>
    </ModalAntd>
  );
};
