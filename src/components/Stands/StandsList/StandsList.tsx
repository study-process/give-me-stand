import { FC } from 'react'
import { StandCard } from "../StandCard";
import { standListStyleThreeColumns, standListStyleFourColumns } from "./styles";
import { StandsListProps } from "./interfaces";
import { StandCardProps } from "../StandCard/interfaces";

const getStandNumber = (id: string) => Number(id.split('-')[1])

export const StandsList: FC<StandsListProps> = ({stands, isLoading, isUserStand, onClick}) => {
  const filteredUserStands = stands
    .filter(stand => stand.isBusy === true && Date.parse(stand.busyUntil ? stand?.busyUntil : '') > Date.now())
  const standsForSort = [...stands]
  const sortedStands = stands ?
    standsForSort
      .sort((stand: StandCardProps, stand2: StandCardProps) =>
        getStandNumber(stand.id) - getStandNumber(stand2.id)) : []
  const standListStyle = stands.length < 10 ? standListStyleThreeColumns : standListStyleFourColumns
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
        />)
      }
    </div>
  }
  return <div style={standListStyle} >
    {sortedStands?.map(stand =>
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
      />)
    }
  </div>
}
