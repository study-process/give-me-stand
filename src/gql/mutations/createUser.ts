import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation CreateUser(
    $username: String
    $login: String
    $matterMostLink: String
    $team: String
    $isAdmin: Boolean
  ) {
      insert_users(objects: {
          username: $username,
          login: $login,
          isAdmin: $isAdmin,
          matterMostLink: $matterMostLink,
          team: $team,
      }) {
          returning {
              username
              team
              id
          }
      }
  }
`
