import { gql } from '@apollo/client'

export const GET_USER_AUTH = gql`
    query getUserAuth {
        users_new(where: {login: {_eq: "login"}, password: {_eq: "password"}}) {
            id
            first_name
            second_name
        }
    }
`
