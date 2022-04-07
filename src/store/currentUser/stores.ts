import { domain } from '../domain'
import { currentUser } from './interfaces'

export const $currentUser = domain.createStore<currentUser>({})
export const $currentUserIsLoading = domain.createStore<boolean>(false)
export const $currentUserName = domain.createStore<string>('')
export const $isUserInDatabase = domain.createStore<number>(0)
