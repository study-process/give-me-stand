import { domain } from '../domain'
import { useQuery } from '@apollo/client'
import {
  GET_CURRENT_USER_BY_NICKNAME,
  GET_STAND_BY_ID
  // CREATE_USER,
  // GET_USER_BY_ID,
} from 'src/gql'
// import { useMutation, useQuery } from '@apollo/client'
import { currentUser } from './interfaces'
import { setUserIsLoadingEvent } from './events'

const FetchCurrentUserByNickname = async (
  nickname: string,
): Promise<currentUser> => {
  const { data, loading, error } = await useQuery(
    GET_CURRENT_USER_BY_NICKNAME,
    {
      variables: { nickname: nickname },
    },
  )
  if (loading) {
    setUserIsLoadingEvent(true)
  }
  if (!error) {
    return data?.users_003[0]
  }
  throw error
}

const FetchStandById = async (
  id: string,
) => {
  const { data, loading, error } = await useQuery(
    GET_STAND_BY_ID,
    {
      variables: { id: id },
    },
  )
  if (loading) {
    setUserIsLoadingEvent(true)
  }
  if (!error) {
    return data?.stands[0]
  }
  throw error
}

// const fetchCurrentUserById = async (id: number): Promise<currentUser> => {
//   const { error, data } = await useQuery(GET_USER_BY_ID, {
//     query: GET_USER_BY_ID,
//     variables: { id: id },
//   })
//   if (!error) {
//     setIsUserIndDBEvent()
//   }
//   throw error
// }
//
// const insertUser = ({ name, nickname, id, node_id }: currentUser) => {
//   const [insertUser, { data, error }] = useMutation(CREATE_USER)
//   if (!error) {
//     console.log(data)
//     return insertUser({
//       variables: {
//         name: name,
//         nickname: nickname,
//         id: id,
//         node_id: node_id,
//       },
//     })
//   }
//   throw error
// }

export const setCurrentUserFx = domain.createEffect(FetchCurrentUserByNickname)
export const setStandFx = domain.createEffect(FetchStandById)
// export const getCurrentUserByIdFx = domain.createEffect(fetchCurrentUserById)
// export const insertUserFx = domain.createEffect(insertUser)
