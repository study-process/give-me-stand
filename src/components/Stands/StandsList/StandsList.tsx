import { FC } from 'react'
import { StandCard } from "../StandCard";
import { standListStyle } from './styles'
import { StandsListProps } from "./interfaces";

export const StandsList: FC<StandsListProps> = ({stands, isLoading, isUserStand, onClick}) => {
  const filteredStands = stands.filter(stand => stand.isBusy === true && Date.parse(stand.busyUntil ? stand?.busyUntil : '') > Date.now())
  if (isUserStand) {
    return <div style={standListStyle}>
      {filteredStands?.map(stand =>
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
  return <div style={standListStyle}>
    {stands?.map(stand =>
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
