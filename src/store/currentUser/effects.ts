import { domain } from '../domain'
import {
  GET_CURRENT_USER_BY_NICKNAME,
  CREATE_USER,
  GET_USER_BY_ID,
} from 'src/gql'
import { useMutation, useQuery } from '@apollo/client'
import { currentUser } from './interfaces'
import { setIsUserIndDBEvent, setUserIsLoadingEvent } from './events'

const fetchCurrentUserByNickname = async (
  nickname: string,
): Promise<currentUser> => {
  const { data, loading, error } = await useQuery(
    GET_CURRENT_USER_BY_NICKNAME,
    {
      query: GET_CURRENT_USER_BY_NICKNAME,
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

const fetchCurrentUserById = async (id: number): Promise<currentUser> => {
  const { error, data } = await useQuery(GET_USER_BY_ID, {
    query: GET_USER_BY_ID,
    variables: { id: id },
  })
  if (!error) {
  }
  throw error
}

const insertUser = ({ name, nickname, id, node_id }: currentUser) => {
  const [insertUser, { data, error }] = useMutation(CREATE_USER)
  if (!error) {
    console.log(data)
    return insertUser({
      variables: {
        name: name,
        nickname: nickname,
        id: id,
        node_id: node_id,
      },
    })
  }
  throw error
}

export const setCurrentUserFx = domain.createEffect(fetchCurrentUserByNickname)
export const getCurrentUserByIdFx = domain.createEffect(fetchCurrentUserById)
export const insertUserFx = domain.createEffect(insertUser)
