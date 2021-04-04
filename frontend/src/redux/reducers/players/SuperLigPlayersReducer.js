import playerService from '../../../services/players'

const INITIAL_STATE = { status: 'loading' }

export const fetchSuperLigPlayers = () => {
  return async (dispatch) => {
    try {
      const data = await playerService.getSuperLigPlayers()
      dispatch({
        type: 'FETCH_SUPER_LIG_PLAYERS_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_SUPER_LIG_PLAYERS_FAILURE',
        error
      })
    }
  }
}

const SuperLigPlayerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SUPER_LIG_PLAYERS_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }
    case 'FETCH_SUPER_LIG_PLAYERS_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}

export default SuperLigPlayerReducer
