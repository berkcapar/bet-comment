import fiksturService from '../../../services/fikstürler'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchPremierLeagueFikstür = () => {
  return async (dispatch) => {
    try {
      const data = await fiksturService.getPremierLigFikstür()
      dispatch({
        type: 'FETCH_PREMIER_LEAGUE_SUCCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_PREMIER_LEAGUE_FAILURE',
        error
      })
    }
  }
}

const PremierLigFikstürReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PREMIER_LEAGUE_SUCCCESS':
      return {
        status: 'success',
        data: action.data
      }
    case 'FETCH_PREMIER_LEAGUE_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}
export default PremierLigFikstürReducer
