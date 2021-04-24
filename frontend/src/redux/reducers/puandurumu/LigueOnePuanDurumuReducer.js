import puanDurumuService from '../../../services/puandurumu'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchLeagueOnePuanDurumu = () => {
  return async (dispatch) => {
    try {
      const data = await puanDurumuService.getLeagueOnePuanDurumu
      dispatch({
        type: 'FETCH_LEAGUEONE_PUAN_DURUMU_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_LEAGUEONE_PUAN_DURUMU_FAILURE',
        error
      })
    }
  }
}

const LeagueOnePuanDurumuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_LEAGUEONE_PUAN_DURUMU_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }

    case 'FETCH_LEAGUEONE_PUAN_DURUMU_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }

    default:
      return state
  }
}
export default LeagueOnePuanDurumuReducer
