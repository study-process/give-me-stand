import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { ApolloProviderWithClient } from "./components/ApolloProviderWithClient";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

ReactDOM.render(
  <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
    <ApolloProviderWithClient >
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>
    </ApolloProviderWithClient>
  </ThemeSwitcherProvider>,
  document.getElementById('root'),
)
