import { gql } from '@apollo/client'

export const CREATE_STAND = gql`
  mutation CreateStand($id: String) {
      insert_stands(objects: {id: $id}) {
          affected_rows
      }
  }
`
