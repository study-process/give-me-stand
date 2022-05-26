import { sample, forward } from "effector";
import {
  $CurrentStands,
  $stands,
  $standsIsLoading,
  getStandsEvent,
  getUserStandEvent,
  resetStandsEvent,
  setIsStandsLoadingEvent,
  setIsUserStandsLoadingEvent,
  releaseStandEvent,
  $standForRelease,
  $openStand,
  setOpenStandEvent,
  setOpenStandToTakeEvent,
  $openStandToTake,
  resetOpenStandEvent,
  deleteUserStandFromStoreEvent, $filteredUserStands, $maxUsersStandsCount
} from "./index";
import { getAllStandFx, getUserStandsFx, releaseStandFx } from "./effects";
import { $currentUser } from "../currentUser";

$stands.on(getAllStandFx.doneData, (_, stands) => stands).reset(resetStandsEvent)
$CurrentStands
  .on(getUserStandsFx.doneData, (_, currentStand) => currentStand)

$standsIsLoading
  .on([setIsStandsLoadingEvent, setIsUserStandsLoadingEvent], (_, isLoading) => isLoading)
  .on([$stands, $CurrentStands], (_) => false)

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
  source: $CurrentStands,
  fn: (currentStands, deletedStand) => currentStands.filter( stand => stand.id !== deletedStand),
  target: $CurrentStands,
})

sample({
  source: $CurrentStands,
  fn: (currentStands) => currentStands.filter(stand =>
    stand.isBusy === true
    && Date.parse(stand.busyUntil ? stand?.busyUntil : '') > Date.now()
  ),
  target: $filteredUserStands,
})

sample({
  clock: $filteredUserStands,
  source: $currentUser,
  fn: (currentUser, filteredUserStands) => {
    const isCountOfUsersStandsAchieved = filteredUserStands?.length >= (currentUser?.maxStandsCount ?? 0)
    const isMaxUsersStandsCountEnabled = currentUser?.isMaxUsersStandsCountEnabled
    const maxUsersStandsCount = currentUser?.maxStandsCount
    const isLimitActive = isMaxUsersStandsCountEnabled && isCountOfUsersStandsAchieved
    return {
      isMaxUsersStandsCountAchieved: isCountOfUsersStandsAchieved,
      isMaxUsersStandsCountEnabled: isMaxUsersStandsCountEnabled,
      maxUsersStandsCount: maxUsersStandsCount,
      isUserCanReleaseStand: !isLimitActive
    }
  },
  target: $maxUsersStandsCount,
})

forward({
  from: $standForRelease,
  to: releaseStandFx,
})


