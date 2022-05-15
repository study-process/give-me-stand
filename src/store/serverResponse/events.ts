import { domain } from '../domain'
import { Response } from "./interfaces";

export const serServerResponseEvent = domain.createEvent<Response>()
export const serServerResponseLoadingEvent = domain.createEvent<boolean>()
export const setServerResponseErrorEvent = domain.createEvent<string>()
