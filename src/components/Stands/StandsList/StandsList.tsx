import { FC } from 'react'
import { StandCard } from "../StandCard";
import { standListStyle } from './styles'

export const StandsList: FC = () => {

  return <div style={standListStyle}>
    <StandCard loading={false}/>
    <StandCard loading={false}/>
    <StandCard loading={false}/>
    <StandCard loading={false}/>
    <StandCard loading={true}/>
    <StandCard loading={false}/>
    <StandCard loading={false}/>
    <StandCard loading={false}/>
    <StandCard loading={false}/>
  </div>
}