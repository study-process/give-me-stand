import { domain } from '../domain'
import { OpenStand } from "./interfaces";
import { StandCardProps } from "../../components/Stands/StandCard/interfaces";

export const $stands = domain.createStore([])
export const $CurrentStand = domain.createStore<StandCardProps[]>([])
export const $standForRelease = domain.createStore<string>('')
export const $openStand = domain.createStore<string>('')
export const $openStandToTake = domain.createStore<OpenStand | null>(null)
export const $standsIsLoading = domain.createStore<boolean>(false)