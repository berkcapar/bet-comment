import fiksturService from '../../../services/fikstürler'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchAllPlusPlayedFikstür = () => {
  return async (dispatch) => {
    try {
      const data = await fiksturService.getAllFiksturPlusPlayed()
      dispatch({
        type: 'FETCH_ALL_PLAYED_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_ALL_PLAYED_FAILURE',
        error
      })
    }
  }
}

const PlayedPlusFikstürReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ALL_PLAYED_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }
    case 'FETCH_ALL_PLAYED_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}
export default PlayedPlusFikstürReducer
