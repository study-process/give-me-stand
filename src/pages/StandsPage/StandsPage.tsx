import { useStore } from 'effector-react';
import { FC } from "react";
import { StandsList } from "src/components/Stands";
import { $stands, $standsIsLoading, getStandsEvent } from "../../store/stands";
import { Spin } from "antd";

export const StandsPage: FC = () => {
  const isLoading = useStore($standsIsLoading)
  const stands = useStore($stands)
  getStandsEvent('/stands')

  return <>
    {isLoading && <Spin size="large" />}
    <StandsList stands={stands} isLoading={isLoading}/>
  </>
}