import { gql } from '@apollo/client'

export const GET_STAND_BY_ID = gql`
  query GetStandByID($id: String) {
    stands(where: { id: { _eq: $id } }) {
        id
        isBusy
        whoIsBusy
        busyUntill
        branch
        comments
    }
  }
`
