import leagueService from '../../services/league'

export const initLeagues = () => {
  return async (dispatch) => {
    const data = await leagueService.getLeagues()
    dispatch({
      type: 'INIT_LEAGUES',
      data: data.leagues
    })
  }
}

const leagueReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_LEAGUES':
      return action.data
    default:
      return state
  }
}

export default leagueReducer
