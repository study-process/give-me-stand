import { domain } from '../domain'
import { currentUser } from './interfaces'

export const $currentUser = domain.createStore<currentUser>({})