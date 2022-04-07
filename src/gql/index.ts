import { ApolloClient, InMemoryCache } from '@apollo/client'
export * from './queries'
export * from './mutations'

const URI = 'https://square-basilisk-55.hasura.app/v1/graphql'
const ADMIN_SECRET =
  'lqDtNuuI4thfIXvF1EZkI18XGOk4uVAnPynN5vlrpddJQGOXbYyiWU6lnZqZDVQp'

export const client = new ApolloClient({
  uri: `${URI}`,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': `${ADMIN_SECRET}`,
  },
})
