import { domain } from '../domain'
import { maxUsersStandsCount, OpenStand, SelectedTeamStands } from "./interfaces";
import { StandCardProps } from "../../components/Stands/StandCard/interfaces";

export const $stands = domain.createStore<StandCardProps[]>([])
export const $availableTeamsForStandsList = domain.createStore<string[]>([])
export const $CurrentStands = domain.createStore<StandCardProps[]>([])
export const $standForRelease = domain.createStore<string>('')
export const $openStand = domain.createStore<string>('')
export const $openStandToTake = domain.createStore<OpenStand | null>(null)
export const $standsIsLoading = domain.createStore<boolean>(false)
export const $filteredUserStands = domain.createStore<StandCardProps[]>([])
export const $maxUsersStandsCount = domain.createStore<maxUsersStandsCount | null>(null)
export const $selectedTeamStands = domain.createStore<SelectedTeamStands | null>(null)
