import { gql } from '@apollo/client'

export const GET_ALL_STANDS = gql`
  query GetAllStands {
      stands_new {
          id
          branch
          busyUntil
          comments
          isBusy
          whoIsBusy
          userId
          team
          matterMostLink
      }
  }
`
