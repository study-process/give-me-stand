import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from 'src/components/LoginPage'
import { MainPage } from 'src/pages/index'
import { NavigationPageTypesEnum } from './constants'


const App = () => {
  return (
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
  )
}

export default App
