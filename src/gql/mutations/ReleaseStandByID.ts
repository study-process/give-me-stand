import { gql } from '@apollo/client'

export const RELEASE_STAND_BY_ID = gql`
      mutation ReleaseStandByID($id: String) {
          update_stands(where: {id: {_eq: $id}}, _set: {isBusy: false, userId: 0}) {
              affected_rows
              returning {
                  id
                  isBusy
                  userId
              }
          }
      }
`


