import { gql } from '@apollo/client'

export const DELETE_STAND = gql`
    mutation DeleteStand($id: String!) {
        delete_stands_new_by_pk(id: $id) {
            id
        }
    }
`