import fiksturService from '../../../services/fikstürler'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchSerieAFikstür = () => {
  return async (dispatch) => {
    try {
      const data = await fiksturService.getSerieAFikstür()
      dispatch({
        type: 'FETCH_SERIEA_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_SERIEA_FAILURE',
        error
      })
    }
  }
}

const SerieAFikstürReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SERIEA_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }
    case 'FETCH_SERIEA_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}
export default SerieAFikstürReducer
