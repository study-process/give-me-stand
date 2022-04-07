import { sample, forward } from 'effector'
import {
  $currentUser,
  $currentUserIsLoading,
  $currentUserName,
  $isUserInDatabase,
  getCurrentUserByIdFx,
  getUserByIdEvent,
  insertUserEvent,
  insertUserFx,
  setCurrentUserFx,
  setIsUserIndDBEvent,
  setUserIsLoadingEvent,
  setUserNameEvent,
} from './index'

$currentUserName.on(setUserNameEvent, (_, userName) => userName)
$currentUser.on(setCurrentUserFx.doneData, (_, currentUser) => currentUser)
$currentUserIsLoading
  .on(setUserIsLoadingEvent, (_) => true)
  .on($currentUser, (_) => false)

$isUserInDatabase.on(setIsUserIndDBEvent, (_, id) => id)

sample({
  clock: setUserNameEvent,
  source: $currentUserName,
  target: setCurrentUserFx,
})

sample({
  clock: getUserByIdEvent,
  source: getUserByIdEvent,
  target: getCurrentUserByIdFx,
})

sample({
  clock: insertUserEvent,
  source: insertUserEvent,
  target: insertUserFx,
})
