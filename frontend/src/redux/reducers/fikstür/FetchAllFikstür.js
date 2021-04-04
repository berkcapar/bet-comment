import fiksturService from '../../../services/fikstürler'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const FetchAllFikstür = () => {
  return async (dispatch) => {
    try {
      const SuperLigdata = await fiksturService.getSuperLigFikstür()
      const PremierLigdata = await fiksturService.getPremierLigFikstür()
      const data = [...SuperLigdata, ...PremierLigdata]

      dispatch({
        type: 'FETCH_ALL_LEAGUE_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_ALL_LEAGUE_FAILURE',
        error
      })
    }
  }
}

const FetchAllFikstürReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ALL_LEAGUE_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }
    case 'FETCH_ALL_LEAGUE_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}
export default FetchAllFikstürReducer
