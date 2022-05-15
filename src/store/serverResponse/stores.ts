import { domain } from '../domain'
import { Response } from "./interfaces";

export const $serverResponse = domain.createStore<Response | null>(null)
export const $serverResponseIsLoading = domain.createStore<boolean>(false)
export const $serverResponseError = domain.createStore<string | null>(null)