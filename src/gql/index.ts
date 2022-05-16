import { ApolloClient, InMemoryCache } from '@apollo/client'
import { useStore } from "effector-react";
import { $currentUser } from "../store";
export * from './queries'
export * from './mutations'

const URI = 'https://give-me-stand.hasura.app/v1/graphql'
const ADMIN_SECRET =
  'qE0xh3pAzoQD6nO9TzLtFUfjD393cR7H1rE3UgWXdJkIeWn4j6pZzEDoekHEw1F1'
// const { accessToken: ADMIN_SECRET} = useStore($currentUser)
// console.log('accessToken', accessToken)

export const client = new ApolloClient({
  uri: `${URI}`,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': `${ADMIN_SECRET}`,
  },
})
