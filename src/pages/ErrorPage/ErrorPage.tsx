import React, {FC} from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ErrorPageSubTitleTypesEnum } from './constants'
import { NavigationPageTypesEnum } from 'src/constants'
import { ErrorPageStatusTypesEnum } from './constants'
import { ErrorPageProps } from "./interfaces";

export const ErrorPage: FC<ErrorPageProps>= ({isNotFound}) => {
  const navigate = useNavigate()
  const status = isNotFound ? ErrorPageStatusTypesEnum.notFound : ErrorPageStatusTypesEnum.notAuthorized
  const subTitle = isNotFound ? ErrorPageSubTitleTypesEnum.notFound : ErrorPageSubTitleTypesEnum.notAuthorized
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    isNotFound ? navigate(NavigationPageTypesEnum.HomePage) : navigate(NavigationPageTypesEnum.LoginPage)
  }

  return (
    <Result
      status={status}
      title={status}
      subTitle={subTitle}
      extra={
        <Button type="primary" onClick={handleClick}>
          {isNotFound ? 'Вернуться на главную' : 'Перейти ко входу'}
        </Button>
      }
    />
  )
}
