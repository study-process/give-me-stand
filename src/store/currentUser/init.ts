import {
  $currentUser, setCurrentUserEvent
} from "./index";

$currentUser.on(setCurrentUserEvent, (_, currentUser) => currentUser)