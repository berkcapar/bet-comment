import fiksturService from '../../../services/fikstürler'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchSuperLeagueFikstür = () => {
  return async (dispatch) => {
    try {
      const data = await fiksturService.getSuperLigFikstür()

      dispatch({
        type: 'FETCH_SUPER_LEAGUE_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_SUPER_LEAGUE_FAILURE',
        error
      })
    }
  }
}

const SuperLigFikstürReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SUPER_LEAGUE_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }

    case 'FETCH_SUPER_LEAGUE_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }

    default:
      return state
  }
}
export default SuperLigFikstürReducer
