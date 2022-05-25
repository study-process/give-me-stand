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
  $openStand,
  setOpenStandEvent,
  setOpenStandToTakeEvent,
  $openStandToTake,
  resetOpenStandEvent,
  deleteUserStandFromStoreEvent
} from "./index";
import { getAllStandFx, getUserStandsFx, releaseStandFx } from "./effects";

$stands.on(getAllStandFx.doneData, (_, stands) => stands).reset(resetStandsEvent)
$CurrentStand
  .on(getUserStandsFx.doneData, (_, currentStand) => currentStand)

$standsIsLoading
  .on([setIsStandsLoadingEvent, setIsUserStandsLoadingEvent], (_, isLoading) => isLoading)
  .on([$stands, $CurrentStand], (_) => false)

$standForRelease.on(releaseStandEvent, (_, standId) => standId)

$openStand.on(setOpenStandEvent, (_, stand) => stand).reset(resetOpenStandEvent)

$openStandToTake.on(setOpenStandToTakeEvent, (_, stand) => stand)

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

sample({
  clock: deleteUserStandFromStoreEvent,
  source: $CurrentStand,
  fn: (currentStands, deletedStand) => currentStands.filter( stand => stand.id !== deletedStand),
  target: $CurrentStand,
})

forward({
  from: $standForRelease,
  to: releaseStandFx,
})


