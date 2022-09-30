import { domain } from '../domain'
import { UserProps } from "./interfaces";
import { SelectedTeamUsers } from "../stands/interfaces";

export const $allUsers = domain.createStore<UserProps[]>([])
export const $isAllUsersLoading = domain.createStore<boolean>(false)
export const $availableTeamsForUserList = domain.createStore<string[]>([])
export const $selectedTeamUsers = domain.createStore<SelectedTeamUsers | null>(null)