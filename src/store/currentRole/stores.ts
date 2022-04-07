import { Store } from 'effector'
import { AccessByRole } from './interfaces'
import { accessByRoleMap } from './logic'
import { domain } from '../domain'

export const $currentRole = domain.createStore<string>('')
export const $accessByRole: Store<AccessByRole> = $currentRole.map((role) =>
  accessByRoleMap(role),
)
