import { FC } from 'react'
import { StandCard } from "../StandCard";
import { standListStyle } from './styles'
import { StandsListProps } from "./interfaces";

export const StandsList: FC<StandsListProps> = ({stands, isLoading}) => {
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
      />)
    }
  </div>
}