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
  const advantagePoints = leaderboard[0].points - leaderboard[1].points;
  const advantageMatchesRaw = advantagePoints / 3;
  const advantageMatches = Number.isInteger(advantageMatchesRaw) ?
    advantageMatchesRaw - 1 : Math.floor(advantageMatchesRaw);
  return topTeamCalendar[topTeamCalendar.length - advantageMatches - 1];
}
