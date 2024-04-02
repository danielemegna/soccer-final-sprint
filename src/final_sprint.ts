export type Leaderboard = Array<{
  team: string,
  points: number
}>

export type TeamCalendar = MatchDay[]
export type MatchDay = {
  opponent: string,
  date: Date
}

export function championshipDay(leaderboard: Leaderboard, topTeamCalendar: TeamCalendar): MatchDay {
  return topTeamCalendar[3];
}
