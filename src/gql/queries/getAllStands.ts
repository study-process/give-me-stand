import { gql } from '@apollo/client'

export const GET_ALL_STANDS = gql`
  query GetAllStands {
      stands {
          id
          branch
          busyUntil
          comments
          isBusy
          whoIsBusy
      }
  }
`
