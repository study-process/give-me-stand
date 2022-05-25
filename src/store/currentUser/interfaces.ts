export interface currentUser {
  login?: string | null;
  userId?: number | null;
  username?: string | null;
  accessToken?: string | null;
  adminSecret?: string | null;
  team?: string | null;
  maxStandsCount?: string | null;
  isMaxUsersStandsCountEnabled?: string | null;
  isTransferPasswordChanged?: string | null;
}