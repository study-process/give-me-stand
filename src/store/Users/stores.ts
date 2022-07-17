import { domain } from '../domain'
import { UserProps } from "./interfaces";

export const $allUsers = domain.createStore<UserProps[]>([])
export const $isAllUsersLoading = domain.createStore<boolean>(false)