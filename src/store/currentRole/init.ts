import { $currentRole, setCurrentRoleEvent } from './index'

$currentRole.on(setCurrentRoleEvent, (_, role) => role)
