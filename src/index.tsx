import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProviderWithClient } from "./components/ApolloProviderWithClient";

ReactDOM.render(
  <ApolloProviderWithClient >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProviderWithClient>,
  document.getElementById('root'),
)
