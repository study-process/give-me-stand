import { domain } from "../domain";
import { useQuery } from "@apollo/client";
import {
  GET_ALL_USERS,
} from "src/gql";

const FetchAllUsers = async () => {
  const { data, error } = await useQuery(
    GET_ALL_USERS
  )
  if (!error) {
    return data?.users
  }
  throw error
}

export const getAllUsersFx = domain.createEffect(FetchAllUsers)
