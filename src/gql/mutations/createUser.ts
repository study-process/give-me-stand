import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation CreateUser(
    $id: Int
    $name: String
    $nickname: String
    $node_id: String
  ) {
    insert_users_003(
      objects: { id: $id, name: $name, nickname: $nickname, node_id: $node_id }
    ) {
      __typename
    }
  }
`
