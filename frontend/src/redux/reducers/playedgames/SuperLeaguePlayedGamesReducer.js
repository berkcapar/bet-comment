import playedGamesService from '../../../services/playedgames'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchSuperLeaguePlayedGames = () => {
  return async (dispatch) => {
    try {
      const data = await playedGamesService.getSuperLeaguePlayedGames()

      dispatch({
        type: 'FETCH_SUPER_LEAGUE_PLAYED_GAMES_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_SUPER_LEAGUE_PLAYED_GAMES_FAILURE',
        error
      })
    }
  }
}

const SuperLigPlayedGamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SUPER_LEAGUE_PLAYED_GAMES_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }

    case 'FETCH_SUPER_LEAGUE_PLAYED_GAMES_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }

    default:
      return state
  }
}
export default SuperLigPlayedGamesReducer
