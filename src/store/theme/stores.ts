import { domain } from '../domain'
import connectLocalStorage from "effector-localstorage/sync";

export const $isDarkModeLocalStorage = connectLocalStorage("isDarkModeGMS")
export const $isDarkMode = domain.createStore<boolean>($isDarkModeLocalStorage.init(false));