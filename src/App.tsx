import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from 'src/pages/LoginPage'
import { MainPage, AdminPage, MainStandsPage } from 'src/pages/index'
import { NavigationPageTypesEnum, ROOT_URL } from "./constants";
import { InitialContainer } from "./components/InitialContainer";
import { ErrorPage } from "./pages/ErrorPage";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Input } from "antd";
import { ThemeSwitcher } from "./components/ThemeSwitcher";


const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked: boolean) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  if (status === "loading") {
    return null;
  }

  return (
      <InitialContainer>
        <ThemeSwitcher isDarkMode={isDarkMode} onChange={toggleTheme} className="ThemeSwitcher"/>
        <div className="App">
          <Routes>
            <Route
              path={ROOT_URL + NavigationPageTypesEnum.HomePage}
              element={<MainPage />}
            />
            <Route
              path={ROOT_URL + NavigationPageTypesEnum.LoginPage}
              element={<LoginPage />}
            />
            <Route
              path={ROOT_URL + NavigationPageTypesEnum.AdminPage}
              element={<AdminPage />}
            />
            <Route
              path={ROOT_URL + NavigationPageTypesEnum.StandsPage}
              element={<MainStandsPage />}
            />
            <Route
              path={ROOT_URL + '*'}
              element={<ErrorPage isNotFound />}
            />
          </Routes>
        </div>
      </InitialContainer>
  )
}

export default App
