export enum NavigationPageTypesEnum {
  HomePage = '/',
  LoginPage = '/login',
  AdminPage = '/admin',
  StandsPage = '/team-stands'
}

export const AUTHORIZED_URL = 'https://give-me-stand-server.herokuapp.com/login'
export const LOCAL_STORAGE_USER = 'currentUser'
export const ROOT_URL = ''

export const ERROR_DUPLICATE_STAND = 'Error: Uniqueness violation. duplicate key value violates unique constraint "stands_pkey"'