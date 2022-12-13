import { gql } from '@apollo/client'

export const CREATE_STAND = gql`
  mutation CreateStand($id: String, $team: String) {
      insert_stands_new(objects: {id: $id, team: $team}) {
          affected_rows
      }
  }
`
