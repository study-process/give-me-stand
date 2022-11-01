import { $allUsers, $availableTeamsForUserList, $isAllUsersLoading, $selectedTeamUsers } from "./stores";
import { getAllUsersFx } from "./effects";
import { forward, sample } from "effector";
import { getAllUsersEvent, setSelectedTeamUsers } from "./events";
import { $availableTeamsForStandsList, $selectedTeamStands, $stands, setSelectedTeamStands } from "../stands";
import { StandCardProps } from "../../components/Stands/StandCard/interfaces";
import { UserProps } from "./interfaces";
import { $currentUser } from "../currentUser";

$allUsers.on(getAllUsersFx.doneData, (_, users) => users)
// $isAllUsersLoading.on(getAllUsersFx.pending, (_, pending) => pending)

forward({
  from: getAllUsersEvent,
  to: getAllUsersFx
})

sample({
  source: $allUsers,
  fn: (users) => {
    const usersTeams = users?.map((user) => user.team) ?? []
    return Array.from(new Set(usersTeams)) as string[];
  },
  target: $availableTeamsForUserList
})

sample({
  source: [$allUsers, $currentUser],
  fn: ([allUsers, currentUser]) => {
    const currentStandsTeam = currentUser?.team ?? ''
    const teamUsers = [...allUsers.filter((user: UserProps) => user?.team === currentStandsTeam)] ?? []
    return {
      currentUsersTeam: currentStandsTeam,
      teamUsers,
    }
  },
  target: $selectedTeamUsers,
})

sample({
  clock: setSelectedTeamUsers,
  source: $allUsers,
  fn: (allUsers, team) => {
    const newTeam = team ?? ''
    const teamUsers = [...allUsers.filter((user: UserProps) => user?.team === newTeam)] ?? []
    return {
      currentUsersTeam: newTeam,
      teamUsers,
    }
  },
  target: $selectedTeamUsers
})