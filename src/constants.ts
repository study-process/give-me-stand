export enum NavigationPageTypesEnum {
  HomePage = '/',
  LoginPage = '/login',
  AdminPage = '/admin',
  StandsPage = '/team-stands'
}

export const AUTHORIZED_URL = 'https://gms-server-new.onrender.com/login'
export const LOCAL_STORAGE_USER = 'currentUser'
export const ROOT_URL = ''

export const ERROR_DUPLICATE_STAND = 'Error: Uniqueness violation. duplicate key value violates unique constraint "stands_pkey"'
export const ERROR_DUPLICATE_USER_LOGIN = 'Error: Uniqueness violation. duplicate key value violates unique constraint "users_login_key"'