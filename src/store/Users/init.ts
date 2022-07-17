import { $allUsers, $isAllUsersLoading } from "./stores";
import { getAllUsersFx } from "./effects";
import { forward } from "effector";
import { getAllUsersEvent } from "./events";

$allUsers.on(getAllUsersFx.doneData, (_, users) => users)
// $isAllUsersLoading.on(getAllUsersFx.pending, (_, pending) => pending)

forward({
  from: getAllUsersEvent,
  to: getAllUsersFx
})