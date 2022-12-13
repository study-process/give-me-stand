import { useQuery, useMutation } from "@apollo/client";
import {
  GET_ALL_STANDS,
  GET_STAND_BY_ID,
  RELEASE_STAND_BY_ID
} from "src/gql";
import { domain } from "../domain";
import { setIsStandsLoadingEvent, setIsUserStandsLoadingEvent } from "./events";

const FetchStandById = async (userId: number | null | undefined
) => {
  const { data, loading, error } = await useQuery(
    GET_STAND_BY_ID,
    {
      variables: { userId: userId },
    },
  )
  if (loading) {
    setIsUserStandsLoadingEvent(true)
  }
  if (!error) {
    return data?.stands_new
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
    return data?.stands_new
  }
  throw error
}

const releaseStand = (id: string) => {
  const [ReleaseStandByID, { error, data }] = useMutation(RELEASE_STAND_BY_ID)
  if (!error) {
    return ReleaseStandByID({
      variables: {
        id: id,
      },
    })
  }
  throw error
}

export const getUserStandsFx = domain.createEffect(FetchStandById)
export const getAllStandFx = domain.createEffect(FetchAllStands)
export const releaseStandFx = domain.createEffect(releaseStand)