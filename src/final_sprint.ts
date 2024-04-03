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
  let topTeamPoints = leaderboard[0].points;
  let { team: secondTeamName, points: secondTeamPoints } = leaderboard[1];

  for (let matchIndex = 0; matchIndex < topTeamCalendar.length; matchIndex++) {
    const matchDay = topTeamCalendar[matchIndex];

    topTeamPoints += 3;
    if (matchDay.opponent != secondTeamName)
      secondTeamPoints += 3;

    const advantagePoints = topTeamPoints - secondTeamPoints;
    const remaningMatches = topTeamCalendar.length - (matchIndex + 1);
    const remaningPoints = remaningMatches * 3;
    if(remaningPoints < advantagePoints)
      return matchDay;
  }

  return null;
}
