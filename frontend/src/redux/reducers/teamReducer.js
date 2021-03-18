import teamService from '../../services/team'

export const initLeagues = () => {
  return async (dispatch) => {
    const data = await teamService.getLeagues()
    dispatch({
      type: 'INIT_TEAMS',
      data: data.teams
    })
  }
}

const teamReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_TEAMS':
      return action.data
    default:
      return state
  }
}

export default teamReducer
