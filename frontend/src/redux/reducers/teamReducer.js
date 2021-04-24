import teamService from '../../services/team'

const INITIAL_STATE = { status: 'loading' }

export const fetchTeamDetails = () => {
  return async (dispatch) => {
    try {
      const data = await teamService.getTeams()
      dispatch({
        type: 'FETCH_TEAM_DETAILS_SUCCESS',
        data: data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_TEAM_DETAILS_FAILURE',
        data: error
      })
    }
  }
}

const TeamDetailsReducer = (state = [INITIAL_STATE], action) => {
  switch (action.type) {
    case 'FETCH_TEAM_DETAILS_SUCCESS':
      return {
        data: action.data,
        status: 'success'
      }
    case 'FETCH_TEAM_DETAILS_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}

export default TeamDetailsReducer
