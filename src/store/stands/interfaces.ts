import { StandCardProps } from "../../components/Stands/StandCard/interfaces";
import { UserProps } from "../Users/interfaces";

export interface OpenStand {
  id: string | undefined
  userId: number
  branch: string
  whoIsBusy: string
  busyUntil: string
  comments: string
}

export interface maxUsersStandsCount {
  isMaxUsersStandsCountAchieved?: boolean
  isMaxUsersStandsCountEnabled?: boolean | null
  maxUsersStandsCount?: number | null
  isUserCanReleaseStand?: boolean | null
}

export interface SelectedTeamStands {
  currentStandsTeam?: string | null;
  teamStands?: StandCardProps[];
}

export interface SelectedTeamUsers {
  currentUsersTeam?: string | null;
  teamUsers?: UserProps[];
}
