import { gql } from '@apollo/client'

export const RELEASE_STAND_BY_ID = gql`
      mutation ReleaseStandByID($id: String, $userId: Int) {
          update_stands_new(where: {id: {_eq: $id}}, _set: {isBusy: false, userId: $userId}) {
              affected_rows
              returning {
                  id
                  isBusy
                  userId
              }
          }
      }
`


