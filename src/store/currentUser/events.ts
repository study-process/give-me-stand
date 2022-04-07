import { domain } from '../domain'
import { currentUser } from './interfaces'

export const setCurrentUserEvent = domain.createEvent<string>()
export const setUserNameEvent = domain.createEvent<string>()
export const getUserByIdEvent = domain.createEvent<number>()
export const setIsUserIndDBEvent = domain.createEvent()
export const setUserIsLoadingEvent = domain.createEvent<boolean>()
export const insertUserEvent = domain.createEvent<currentUser>()
