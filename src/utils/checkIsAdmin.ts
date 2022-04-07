import { LoginCheck } from 'src/interfaces'

//TODO: изменить на проверку по признаку isAdmin, присвоенному юзеру из БД
export const checkIsAdmin = ({ username, password }: LoginCheck) => {
  const currentUsername = 'admin'
  const currentPassword = 'admin'
  if (username === currentUsername && password === currentPassword) {
    return true
  }
}
