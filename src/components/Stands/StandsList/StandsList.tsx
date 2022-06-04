import { FC } from 'react'
import { StandCard } from "../StandCard";
import { standListStyleThreeColumns, standListStyleFourColumns } from "./styles";
import { StandsListProps } from "./interfaces";
import { StandCardProps } from "../StandCard/interfaces";
import { useStore } from "effector-react";
import { $currentUser } from "../../../store";
import { $filteredUserStands, $maxUsersStandsCount } from "../../../store/stands";

const getStandNumber = (id: string) => Number(id.split('-')[1])

export const StandsList: FC<StandsListProps> = ({stands, isLoading, isUserStand, onClick}) => {
  const {team: userTeam} = useStore($currentUser) ?? {}
  const filteredUserStands = useStore($filteredUserStands)
  const { isUserCanReleaseStand } = useStore($maxUsersStandsCount) ?? {}

  const standsForSort = [...stands]
  const sortedAndFilterdByteamStands = stands ?
    standsForSort
      .sort((stand: StandCardProps, stand2: StandCardProps) =>
        getStandNumber(stand.id) - getStandNumber(stand2.id))
      .filter(stand => stand.team?.toLowerCase() === userTeam?.toLowerCase()): []
  const standListStyle = sortedAndFilterdByteamStands.length < 10 ? standListStyleThreeColumns : standListStyleFourColumns
  const UserStandListStyle = filteredUserStands.length < 10 ? standListStyleThreeColumns : standListStyleFourColumns
  if (isUserStand) {
    return <div style={UserStandListStyle}>
      {filteredUserStands?.map(stand =>
        <StandCard
          loading={isLoading}
          id={stand.id}
          isBusy={stand.isBusy}
          whoIsBusy={stand.whoIsBusy}
          comments={stand.comments}
          busyUntil={stand.busyUntil}
          branch={stand.branch}
          key={stand.id}
          isUserStand={isUserStand}
          onClick={onClick}
          matterMostLink={stand.matterMostLink}
        />)
      }
    </div>
  }
  return <div style={standListStyle} >
    {sortedAndFilterdByteamStands?.map(stand =>
      <StandCard
        loading={isLoading}
        id={stand.id}
        isBusy={stand.isBusy}
        whoIsBusy={stand.whoIsBusy}
        comments={stand.comments}
        busyUntil={stand.busyUntil}
        branch={stand.branch}
        key={stand.id}
        isUserStand={isUserStand}
        onClick={onClick}
        isCurrentUserStandsLimitEnabled={!isUserCanReleaseStand}
        matterMostLink={stand.matterMostLink}
      />)
    }
  </div>
}
