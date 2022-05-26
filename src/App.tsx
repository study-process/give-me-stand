import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from 'src/pages/LoginPage'
import { MainPage } from 'src/pages/index'
import { NavigationPageTypesEnum } from './constants'
import { InitialContainer } from "./components/InitialContainer";

const App = () => {
  return (
      <InitialContainer>
        <div className="App">
          <Routes>
            <Route
              path={NavigationPageTypesEnum.HomePage}
              element={<LoginPage />}
            />
            <Route
              path={NavigationPageTypesEnum.MainPage}
              element={<MainPage />}
            />
          </Routes>
        </div>
      </InitialContainer>
  )
}

export default App
