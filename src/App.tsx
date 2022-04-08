import React from 'react'
import { useStore } from 'effector-react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from 'src/components/LoginPage'
import { AdminPage } from 'src/components/AdminPage'
import { UserPage, MainPage, StandsPage } from 'src/pages/index'
import { Header } from './components/Header'
import { NavigationPageTypesEnum } from './constants'
import StudentPage from './components/StudentPage/StudentPage'
import { $isHeaderDisplayed } from "./store/commonWidgets";

const App = () => {
  const isHeaderVisible = useStore($isHeaderDisplayed)

  return (
    <div className="App">
      <Header isVisible={isHeaderVisible}/>
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

        <Route
          path={NavigationPageTypesEnum.UserPage}
          element={<UserPage />}
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
