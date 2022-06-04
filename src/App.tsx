import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from 'src/pages/LoginPage'
import { MainPage, AdminPage } from 'src/pages/index'
import { NavigationPageTypesEnum } from './constants'
import { InitialContainer } from "./components/InitialContainer";
import { ErrorPage } from "./pages/ErrorPage";

const App = () => {
  return (
      <InitialContainer>
        <div className="App">
          <Routes>
            <Route
              path={NavigationPageTypesEnum.HomePage}
              element={<MainPage />}
            />
            <Route
              path={NavigationPageTypesEnum.LoginPage}
              element={<LoginPage />}
            />
            <Route
              path={NavigationPageTypesEnum.AdminPage}
              element={<AdminPage />}
            />
            <Route
              path="*"
              element={<ErrorPage isNotFound />}
            />
          </Routes>
        </div>
      </InitialContainer>
  )
}

export default App
