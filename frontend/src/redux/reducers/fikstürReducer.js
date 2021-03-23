import fiksturService from '../../services/fikstürler'

export const initSuperLeagueFikstür = () => {
  return async (dispatch) => {
    const SuperLigFikstür = await fiksturService.getSuperLigFikstür()
    dispatch({
      type: 'INIT_SUPER_LEAGUE',
      data: SuperLigFikstür
    })
  }
}

const fikstürReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SUPER_LEAGUE':
      return action.data
    default:
      return state
  }
}
export default fikstürReducer
