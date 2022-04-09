import { sample } from "effector";
import {
  $CurrentStand,
  $stands,
  $standsIsLoading,
  getStandsEvent, getUserStandEvent, resetStandsEvent,
  setIsStandsLoadingEvent
} from "./index";
import { getAllStandFx, getUserStandsFx } from "./effects";

$stands.on(getAllStandFx.doneData, (_, stands) => stands).reset(resetStandsEvent)
$CurrentStand.on(getUserStandsFx.doneData, (_, currentStand) => currentStand)
$standsIsLoading
  .on(setIsStandsLoadingEvent, (_, isLoading) => isLoading)
  .on([$stands, $CurrentStand], (_) => false)

sample({
  clock: getStandsEvent,
  source: getStandsEvent,
  target: getAllStandFx
})

sample({
  clock: getUserStandEvent,
  source: getUserStandEvent,
  target: getUserStandsFx
})


