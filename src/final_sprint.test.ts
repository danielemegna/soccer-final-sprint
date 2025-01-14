import { describe, expect, test } from '@jest/globals';
import { Leaderboard, TeamCalendar, championshipDay } from './final_sprint';

describe('championship day', () => {

  test('with close top teams match [REAL 2024 SEASON AT 02 APRIL]', () => {
    const leaderboard: Leaderboard = [
      { team: 'inter', points: 79 },
      { team: 'milan', points: 65 },
      { team: 'juventus', points: 59 },
      { team: 'bologna', points: 57 },
    ]
    const topTeamCalendar: TeamCalendar = [
      { opponent: 'udinese', date: new Date('2024/04/08') },
      { opponent: 'cagliari', date: new Date('2024/04/14') },
      { opponent: 'milan', date: new Date('2024/04/22') },
      { opponent: 'torino', date: new Date('2024/04/28') },
      { opponent: 'sassuolo', date: new Date('2024/05/05') },
      { opponent: 'frosinone', date: new Date('2024/05/12') },
      { opponent: 'lazio', date: new Date('2024/05/19') },
      { opponent: 'verona', date: new Date('2024/05/26') },
    ]

    const result = championshipDay(leaderboard, topTeamCalendar);

    expect(result).toEqual(
      { opponent: 'milan', date: new Date('2024/04/22') }
    )
  })

  test('without top teams match and odd advantage', () => {
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

  test('without top teams match and even advantage', () => {
    const leaderboard: Leaderboard = [
      { team: 'inter', points: 77 },
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
      { opponent: 'sassuolo', date: new Date('2024/05/05') },
    )
  })

  test('with top teams match after championshipDay', () => {
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
      { opponent: 'milan', date: new Date('2024/05/19') },
      { opponent: 'verona', date: new Date('2024/05/26') },
    ]

    const result = championshipDay(leaderboard, topTeamCalendar);

    expect(result).toEqual(
      { opponent: 'torino', date: new Date('2024/04/28') }
    )
  })
  
  test('with top teams match and close third team', () => {
    const leaderboard: Leaderboard = [
      { team: 'inter', points: 79 },
      { team: 'milan', points: 65 },
      { team: 'juventus', points: 64 },
      { team: 'bologna', points: 57 },
    ]
    const topTeamCalendar: TeamCalendar = [
      { opponent: 'udinese', date: new Date('2024/04/08') },
      { opponent: 'cagliari', date: new Date('2024/04/14') },
      { opponent: 'milan', date: new Date('2024/04/22') },
      { opponent: 'torino', date: new Date('2024/04/28') },
      { opponent: 'sassuolo', date: new Date('2024/05/05') },
      { opponent: 'frosinone', date: new Date('2024/05/12') },
      { opponent: 'lazio', date: new Date('2024/05/19') },
      { opponent: 'verona', date: new Date('2024/05/26') },
    ]

    const result = championshipDay(leaderboard, topTeamCalendar);

    expect(result).toEqual(
      { opponent: 'torino', date: new Date('2024/04/28') },
    )
  })

  test('last day win in the top teams match at same points', () => {
    const leaderboard: Leaderboard = [
      { team: 'inter', points: 79 },
      { team: 'milan', points: 79 },
      { team: 'juventus', points: 59 },
      { team: 'bologna', points: 57 },
    ]
    const topTeamCalendar: TeamCalendar = [
      { opponent: 'udinese', date: new Date('2024/04/08') },
      { opponent: 'cagliari', date: new Date('2024/04/14') },
      { opponent: 'verona', date: new Date('2024/04/22') },
      { opponent: 'torino', date: new Date('2024/04/28') },
      { opponent: 'sassuolo', date: new Date('2024/05/05') },
      { opponent: 'frosinone', date: new Date('2024/05/12') },
      { opponent: 'lazio', date: new Date('2024/05/19') },
      { opponent: 'milan', date: new Date('2024/05/26') },
    ]

    const result = championshipDay(leaderboard, topTeamCalendar);

    expect(result).toEqual(
      { opponent: 'milan', date: new Date('2024/05/26') },
    )
  })

  test('last day win with top teams match at same points in the middle', () => {
    const leaderboard: Leaderboard = [
      { team: 'inter', points: 79 },
      { team: 'milan', points: 79 },
      { team: 'juventus', points: 59 },
      { team: 'bologna', points: 57 },
    ]
    const topTeamCalendar: TeamCalendar = [
      { opponent: 'udinese', date: new Date('2024/04/08') },
      { opponent: 'cagliari', date: new Date('2024/04/14') },
      { opponent: 'milan', date: new Date('2024/04/22') },
      { opponent: 'torino', date: new Date('2024/04/28') },
      { opponent: 'sassuolo', date: new Date('2024/05/05') },
      { opponent: 'frosinone', date: new Date('2024/05/12') },
      { opponent: 'lazio', date: new Date('2024/05/19') },
      { opponent: 'verona', date: new Date('2024/05/26') },
    ]

    const result = championshipDay(leaderboard, topTeamCalendar);

    expect(result).toEqual(
      { opponent: 'verona', date: new Date('2024/05/26') },
    )
  })

  test('null result on last day with same points', () => {
    const leaderboard: Leaderboard = [
      { team: 'inter', points: 79 },
      { team: 'milan', points: 79 },
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

    expect(result).toBeNull();
  })

  test('update [REAL 2024 SEASON AT APRIL 14th]', () => {
    const leaderboard: Leaderboard = [
      { team: 'inter', points: 83 },
      { team: 'milan', points: 69 },
      { team: 'juventus', points: 63 },
      { team: 'bologna', points: 59 },
    ]
    const topTeamCalendar: TeamCalendar = [
      { opponent: 'milan', date: new Date('2024/04/22') },
      { opponent: 'torino', date: new Date('2024/04/28') },
      { opponent: 'sassuolo', date: new Date('2024/05/05') },
      { opponent: 'frosinone', date: new Date('2024/05/12') },
      { opponent: 'lazio', date: new Date('2024/05/19') },
      { opponent: 'verona', date: new Date('2024/05/26') },
    ]

    const result = championshipDay(leaderboard, topTeamCalendar);

    expect(result).toEqual(
      { opponent: 'milan', date: new Date('2024/04/22') },
    )
  })

})
