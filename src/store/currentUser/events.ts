import { domain } from '../domain'
import { currentUser } from "./interfaces";

export const setCurrentUserEvent = domain.createEvent<currentUser>()
