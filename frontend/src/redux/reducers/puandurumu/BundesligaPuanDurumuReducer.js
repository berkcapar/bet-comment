import puanDurumuService from '../../../services/puandurumu'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchBundesligaPuanDurumu = () => {
  return async (dispatch) => {
    try {
      const data = await puanDurumuService.getBundesligaPuanDurumu()

      dispatch({
        type: 'FETCH_BUNDESLIGA_PUAN_DURUMU_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_BUNDESLIGA_PUAN_DURUMU_FAILURE',
        error
      })
    }
  }
}

const BundesligaPuanDurumuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_BUNDESLIGA_PUAN_DURUMU_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }

    case 'FETCH_BUNDESLIGA_PUAN_DURUMU_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }

    default:
      return state
  }
}
export default BundesligaPuanDurumuReducer
