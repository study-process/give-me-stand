import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { ApolloProviderWithClient } from "./components/ApolloProviderWithClient";

ReactDOM.render(
  <ApolloProviderWithClient >
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </ApolloProviderWithClient>,
  document.getElementById('root'),
)
