import { gql } from '@apollo/client'

export const TAKE_STAND_BY_ID = gql`
      mutation TakeStandByID(
          $id: String
          $userId: Int
          $branch: String
          $whoIsBusy: String
          $busyUntil: String
          $comments: String
      ) {
          update_stands(where: {id: {_eq: $id}}, _set: {branch: $branch, busyUntil: $busyUntil, comments: $comments, isBusy: true, userId: $userId, whoIsBusy: $whoIsBusy}) {
              affected_rows
              returning {
                  id
                  isBusy
                  userId
              }
          }
      }
`

