import { CurrentRoleTypesEnum } from './constants'
import { AccessByRole } from './interfaces'

export const accessByRoleMap = (role: string): AccessByRole => ({
  isTeacher: role === CurrentRoleTypesEnum.teacher,
  isStudent: role === CurrentRoleTypesEnum.student,
  isAdmin: role === CurrentRoleTypesEnum.admin,
})
