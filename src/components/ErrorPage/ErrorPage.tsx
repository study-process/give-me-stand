import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ErrorPageSubTitleTypesEnum } from './constants'
import { NavigationPageTypesEnum } from 'src/constants'
import { ErrorPageStatusTypesEnum } from './constants'

export const ErrorPage = () => {
  const navigate = useNavigate()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    navigate(NavigationPageTypesEnum.homePage)
  }

  return (
    <Result
      status={ErrorPageStatusTypesEnum.notAuthorized}
      title={ErrorPageStatusTypesEnum.notAuthorized}
      subTitle={ErrorPageSubTitleTypesEnum.notAuthorized}
      extra={
        <Button type="primary" onClick={handleClick}>
          На главную
        </Button>
      }
    />
  )
}
