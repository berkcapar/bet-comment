import fiksturService from '../../../services/fikstürler'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchAllFikstür = () => {
  return async (dispatch) => {
    try {
      const data = await fiksturService.getAllFikstur()
      dispatch({
        type: 'FETCH_ALL_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_ALL_FAILURE',
        error
      })
    }
  }
}

const AllFikstürReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ALL_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }
    case 'FETCH_ALL_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}
export default AllFikstürReducer
