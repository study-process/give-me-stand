import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
  query GetUserByID($id: Int) {
    users_003(where: { id: { _eq: $id } }) {
      name
      nickname
      node_id
      id
    }
  }
`
