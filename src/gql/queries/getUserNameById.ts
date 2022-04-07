import { gql } from '@apollo/client'

export const GET_USER_NAME_BY_ID = gql`
  query GetUserRoleByName($id: Int) {
    users_003(where: { id: { _eq: $id } }) {
      name
    }
  }
`
