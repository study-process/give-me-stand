import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation CreateUser(
    $first_name: String
    $second_name: String
    $login: String
    $password: String
  ) {
      insert_users(objects: {first_name: $first_name, second_name: $second_name, login: $login, password: $password}) {
          returning {
              first_name
              second_name
              id
          }
      }
  }
`
