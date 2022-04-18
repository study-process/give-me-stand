import { sample, forward } from "effector";
import {
  $CurrentStand,
  $stands,
  $standsIsLoading,
  getStandsEvent,
  getUserStandEvent,
  resetStandsEvent,
  setIsStandsLoadingEvent,
  setIsUserStandsLoadingEvent,
  releaseStandEvent,
  $standForRelease,
  releaseUserStandEvent,
  $openStand, setOpenStandEvent
} from "./index";
import { getAllStandFx, getUserStandsFx, releaseStandFx } from "./effects";

$stands.on(getAllStandFx.doneData, (_, stands) => stands).reset(resetStandsEvent)
$CurrentStand
  .on(getUserStandsFx.doneData, (_, currentStand) => currentStand)
  // .on(releaseUserStandEvent, (state, standForRelease) => {
  //   state.filter(stand => stand?.id !== standForRelease)
  // })

$standsIsLoading
  .on([setIsStandsLoadingEvent, setIsUserStandsLoadingEvent], (_, isLoading) => isLoading)
  .on([$stands, $CurrentStand], (_) => false)

$standForRelease.on(releaseStandEvent, (_, standId) => standId)

$openStand.on(setOpenStandEvent, (_, stand) => stand).reset()

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

forward({
  from: $standForRelease,
  to: releaseStandFx,
})


