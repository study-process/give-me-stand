export interface OpenStand {
  id: string | undefined
  userId: number
  branch: string
  whoIsBusy: string
  busyUntil: string
  comments: string
}

export interface maxUsersStandsCount {
  isMaxUsersStandsCountAchieved?: boolean
  isMaxUsersStandsCountEnabled?: boolean | null
  maxUsersStandsCount?: number | null
  isUserCanReleaseStand?: boolean | null
}
