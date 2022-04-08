import { gql } from '@apollo/client'

export const GET_STAND_BY_ID = gql`
  query GetStandByID($userId: Int) {
    stands(where: { userId: { _eq: $userId } }) {
        id
        isBusy
        whoIsBusy
        busyUntil
        branch
        comments
        userId
    }
  }
`
