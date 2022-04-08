import { currentUser, setUserIsLoadingEvent } from "../currentUser";
import { useQuery } from "@apollo/client";
import {
  GET_ALL_STANDS,
  GET_STAND_BY_ID
} from "src/gql";
import { domain } from "../domain";
import { setIsStandsLoadingEvent } from "./events";

const FetchStandById = async (
) => {
  const { data, loading, error } = await useQuery(
    GET_STAND_BY_ID,
    {
      variables: { id: '1-01' },
    },
  )
  if (loading) {
    setUserIsLoadingEvent(true)
  }
  if (!error) {
    return data
  }
  throw error
}

const FetchAllStands = async () => {
  const { data, loading, error } = await useQuery(
    GET_ALL_STANDS
  )
  if (loading) {
    setIsStandsLoadingEvent(true)
  }
  if (!error) {
    return data?.stands
  }
  throw error
}

export const setStandFx = domain.createEffect(FetchStandById)
export const getAllStandFx = domain.createEffect(FetchAllStands)