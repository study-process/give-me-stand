import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from 'src/components/LoginPage'
import { AdminPage } from 'src/components/AdminPage'
import { StandsPage } from 'src/pages'
import { NavigationPageTypesEnum } from './constants'
import StudentPage from './components/StudentPage/StudentPage'


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path={NavigationPageTypesEnum.HomePage}
          element={<LoginPage />}
        />
        <Route
          path={NavigationPageTypesEnum.LoginPage}
          element={<div>login</div>}
        />
        <Route
          path={NavigationPageTypesEnum.AdminLoginPage}
          element={
            <div>
              <LoginPage />
            </div>
          }
        />
        <Route
          path={NavigationPageTypesEnum.StudentPage}
          element={<StudentPage />}
        />
        <Route
          path={NavigationPageTypesEnum.AdminPage}
          element={
            <div>
              <AdminPage />
            </div>
          }
        />

        //TODO: основные страницы, остальные удалить
        <Route
          path={NavigationPageTypesEnum.StandsPage}
          element={<StandsPage />}
        />
      </Routes>
    </div>
  )
}

export default App
