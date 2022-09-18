import { domain } from '../domain'
import { OpenStand } from "./interfaces";
import { $selectedTeamStands } from "./stores";

export const getStandsEvent = domain.createEvent<string>()
export const releaseStandEvent = domain.createEvent<string>()
export const setOpenStandEvent = domain.createEvent<string>()
export const setOpenStandToTakeEvent = domain.createEvent<OpenStand>()
export const deleteUserStandFromStoreEvent = domain.createEvent<string>()
export const resetOpenStandEvent = domain.createEvent()
export const releaseUserStandEvent = domain.createEvent<string>()
export const getUserStandEvent = domain.createEvent<number | null | undefined>()
export const setIsStandsLoadingEvent = domain.createEvent<boolean>()
export const setIsUserStandsLoadingEvent = domain.createEvent<boolean>()
export const resetStandsEvent = domain.createEvent<void>()
export const setSelectedTeamStands = domain.createEvent<string>()