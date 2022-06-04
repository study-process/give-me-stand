export interface StandCardProps {
  loading?: boolean;
  id: string;
  isBusy?: boolean;
  whoIsBusy?: string;
  busyUntil?: string;
  branch?: string;
  comments?: string;
  isUserStand?: boolean;
  team?: string;
  onClick: () => void;
  isCurrentUserStandsLimitEnabled?: boolean,
  matterMostLink?: string,
}