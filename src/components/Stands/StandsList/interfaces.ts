import { StandCardProps } from "../StandCard/interfaces";

export interface StandsListProps {
  stands: StandCardProps[];
  isLoading: boolean;
  isUserStand?: boolean;
}