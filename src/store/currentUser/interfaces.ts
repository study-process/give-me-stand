export interface currentUser {
  login?: string | null;
  userId?: number | null;
  username?: string | null;
  accessToken?: string | null;
  adminSecret?: string | null;
  team?: string | null;
  maxStandsCount?: number | null;
  isMaxUsersStandsCountEnabled?: boolean | null;
  isTransferPasswordChanged?: string | null;
  matterMostLink?: string | null;
  isAdmin?: boolean | null;
}