import { domain } from '../domain'

export const setModalVisibleEvent = domain.createEvent()
export const setLogoutModalVisibleEvent = domain.createEvent<boolean>()
export const setModalUnVisibleEvent = domain.createEvent()
export const setModalWarningVisibleEvent = domain.createEvent()
export const setModalWarningUnVisibleEvent = domain.createEvent()