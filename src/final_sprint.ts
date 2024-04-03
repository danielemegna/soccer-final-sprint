export type Leaderboard = Array<{
  team: string,
  points: number
}>

export type TeamCalendar = MatchDay[]
export type MatchDay = {
  opponent: string,
  date: Date
}

export function championshipDay(leaderboard: Leaderboard, topTeamCalendar: TeamCalendar): MatchDay | null {
  let upToDateLeaderboard = [...leaderboard];

  for (let matchIndex = 0; matchIndex < topTeamCalendar.length; matchIndex++) {
    const currentMatchDay = topTeamCalendar[matchIndex];

    upToDateLeaderboard = upToDateLeaderboard.map(leaderboardItem => {
      if (leaderboardItem.team == currentMatchDay.opponent)
        return leaderboardItem;

      return { team: leaderboardItem.team, points: leaderboardItem.points + 3 }
    }).sort((a,b) => a.points < b.points ? 1 : -1)

    const advantagePoints = upToDateLeaderboard[0].points - upToDateLeaderboard[1].points;
    const remaningMatches = topTeamCalendar.length - (matchIndex + 1);
    const remaningPoints = remaningMatches * 3;
    if (remaningPoints < advantagePoints)
      return currentMatchDay;
  }

  return null;
}
