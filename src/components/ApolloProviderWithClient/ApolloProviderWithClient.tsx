import React, {FC} from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { useStore } from "effector-react";
import { $currentUser } from "../../store";
export * from '../../gql/queries'
export * from '../../gql/mutations'
import { ApolloProvider } from '@apollo/client'

export const ApolloProviderWithClient: FC = ({ children }) => {
  const URI = 'https://give-me-stand.hasura.app/v1/graphql'
  const { adminSecret } = useStore($currentUser)

  const client = new ApolloClient({
    uri: `${URI}`,
    cache: new InMemoryCache(),
    headers: {
      'x-hasura-admin-secret': `${adminSecret}`,
    },
  })


  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}