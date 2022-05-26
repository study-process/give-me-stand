import { domain } from '../domain'

export const $isModalDisplayed = domain.createStore<boolean>(false)
export const $isModalWarningDisplayed = domain.createStore<boolean>(false)
export const $isDarkMode = domain.createStore<boolean>(false)
