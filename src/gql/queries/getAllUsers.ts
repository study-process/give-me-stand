import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query GetAllUsers {
      users_new {
          id
          username
          team
          isAdmin
          login
      }
  }
`
