import { gql } from '@apollo/client'

export const CHANGE_USER_PASSWORD = gql`
      mutation ChangeUserPassword(
          $id: Int
          $password: String
      ) {
          update_users_new(where: {id: {_eq: $id}}, _set: {password: $password, isTransferPasswordChanged: true}) {
              affected_rows
              returning {
                  id
                  isTransferPasswordChanged
              }
          }
      }
`

