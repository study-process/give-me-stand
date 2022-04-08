import { sample, guard } from "effector";
import {
  $CurrentStand,
  $stands,
  $standsIsLoading,
  getStandsEvent, resetStandsEvent,
  setIsStandsLoadingEvent
} from "./index";
import { getAllStandFx, setStandFx } from "./effects";
$stands.on(getAllStandFx.doneData, (_, stands) => stands).reset(resetStandsEvent)
$CurrentStand.on(setStandFx.doneData, (_, currentStand) => currentStand)
$standsIsLoading
  .on(setIsStandsLoadingEvent, (_, isLoading) => isLoading)
  .on($stands, (_) => false)

guard({
  clock: getStandsEvent,
  source: getStandsEvent,
  filter: (path: string) => path === "/stands",
  target: getAllStandFx
})

guard({
  clock: getStandsEvent,
  source: getStandsEvent,
  filter: (path: string) => path === "/my-stands",
  target: setStandFx
})


