import { domain } from '../domain'

export const getStandsEvent = domain.createEvent<string>()
export const releaseStandEvent = domain.createEvent<string>()
export const releaseUserStandEvent = domain.createEvent<string>()
export const getUserStandEvent = domain.createEvent<number | null | undefined>()
export const setIsStandsLoadingEvent = domain.createEvent<boolean>()
export const setIsUserStandsLoadingEvent = domain.createEvent<boolean>()
export const resetStandsEvent = domain.createEvent<void>()