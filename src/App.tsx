import React, {useEffect} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from 'src/pages/LoginPage'
import { MainPage, AdminPage, MainStandsPage } from 'src/pages/index'
import { NavigationPageTypesEnum, ROOT_URL } from "./constants";
import { InitialContainer } from "./components/InitialContainer";
import { ErrorPage } from "./pages/ErrorPage";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useStore } from "effector-react";
import { $isDarkMode, setIsDarkModeEvent } from "./store/theme";

const App = () => {
  const isDarkMode = useStore($isDarkMode)
  const { switcher, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked: boolean) => {
    setIsDarkModeEvent(isChecked);
    switcher({ theme: isDarkMode ? themes.dark : themes.light });
  };

  useEffect(() => {
      switcher({ theme: isDarkMode ? themes.dark : themes.light });
  }, [isDarkMode, switcher, themes])

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
