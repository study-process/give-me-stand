export interface AccessToken {
  accessToken?: string | null;
}

export interface Response {
  data: string | AccessToken;
}

export enum serverResponse {
  NOT_AUTHORIZED = 'Username or password incorrect'
}
