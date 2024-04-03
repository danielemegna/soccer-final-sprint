import { describe, expect, test } from '@jest/globals';
import { Leaderboard, TeamCalendar, championshipDay } from './final_sprint';

describe('championship day', () => {

  test('without top teams match', () => {
    const leaderboard: Leaderboard = [
      { team: 'inter', points: 79 },
      { team: 'milan', points: 65 },
      { team: 'juventus', points: 59 },
      { team: 'bologna', points: 57 },
    ]
    const topTeamCalendar: TeamCalendar = [
      { opponent: 'udinese', date: new Date('2024/04/08') },
      { opponent: 'cagliari', date: new Date('2024/04/14') },
      { opponent: 'fiorentina', date: new Date('2024/04/22') },
      { opponent: 'torino', date: new Date('2024/04/28') },
      { opponent: 'sassuolo', date: new Date('2024/05/05') },
      { opponent: 'frosinone', date: new Date('2024/05/12') },
      { opponent: 'lazio', date: new Date('2024/05/19') },
      { opponent: 'verona', date: new Date('2024/05/26') },
    ]

    const result = championshipDay(leaderboard, topTeamCalendar);

    expect(result).toEqual(
      { opponent: 'torino', date: new Date('2024/04/28') }
    )
  })

})
