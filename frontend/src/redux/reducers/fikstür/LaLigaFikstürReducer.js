import fiksturService from '../../../services/fikstürler'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchLaLigaFikstür = () => {
  return async (dispatch) => {
    try {
      const data = await fiksturService.getLaligaFikstür()
      dispatch({
        type: 'FETCH_LALIGA_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_LALIGA_FAILURE',
        error
      })
    }
  }
}

const LaLigaFikstürReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_LALIGA_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }
    case 'FETCH_LALIGA_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}
export default LaLigaFikstürReducer
