import playedGamesService from '../../../services/playedgames'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchAllLeaguePlayedGames = () => {
  return async (dispatch) => {
    try {
      const SuperLigData = await playedGamesService.getAllLeaguePlayedGames()
      const PremierLeagueData = await playedGamesService.getPremierLeaguePlayedGames()
      const LaLigaData = await playedGamesService.getLaLigaPlayedGames()
      const SerieAData = await playedGamesService.getSerieAPlayedGames()
      const BundesligaData = await playedGamesService.getBundesligaPlayedGames()
      const LigueOneData = await playedGamesService.getLigueOnePlayedGames()
      const data = [
        ...SuperLigData,
        ...PremierLeagueData,
        ...LaLigaData,
        ...SerieAData,
        ...BundesligaData,
        ...LigueOneData
      ]
      dispatch({
        type: 'FETCH_ALL_LEAGUE_PLAYED_GAMES_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_ALL_LEAGUE_PLAYED_GAMES_FAILURE',
        error
      })
    }
  }
}

const AllLeaguePGReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ALL_LEAGUE_PLAYED_GAMES_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }

    case 'FETCH_ALL_LEAGUE_PLAYED_GAMES_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }

    default:
      return state
  }
}
export default AllLeaguePGReducer
