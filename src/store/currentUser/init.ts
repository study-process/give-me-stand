import {
  $currentUser, resetCurrentUserEvent, setCurrentUserEvent
} from "./index";

$currentUser
  .on(setCurrentUserEvent, (_, currentUser) => currentUser)
  .reset(resetCurrentUserEvent)