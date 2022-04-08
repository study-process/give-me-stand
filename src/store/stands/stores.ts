import { domain } from '../domain'

export const $stands = domain.createStore([])
export const $CurrentStand = domain.createStore([])
export const $standsIsLoading = domain.createStore<boolean>(false)