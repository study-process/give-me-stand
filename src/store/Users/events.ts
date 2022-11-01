import { domain } from '../domain'

export const getAllUsersEvent = domain.createEvent<void>()
export const setSelectedTeamUsers = domain.createEvent<string>()