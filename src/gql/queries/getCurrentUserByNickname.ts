import { gql } from '@apollo/client'

export const GET_CURRENT_USER_BY_NICKNAME = gql`
  query GetCurrentUserByNickname($nickname: String) {
    users_003(where: { nickname: { _eq: $nickname } }) {
      id
      node_id
      name
    }
  }
`
