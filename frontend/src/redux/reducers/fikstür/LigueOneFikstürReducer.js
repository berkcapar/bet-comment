import fiksturService from '../../../services/fikstürler'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchLigueOneFikstür = () => {
  return async (dispatch) => {
    try {
      const data = await fiksturService.getLeagueOneFikstür()
      dispatch({
        type: 'FETCH_LIGUEONE_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_LIGUEONE_FAILURE',
        error
      })
    }
  }
}

const LigueOneFikstürReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_LIGUEONE_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }
    case 'FETCH_LIGUEONE_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}
export default LigueOneFikstürReducer
