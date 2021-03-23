import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import fikstürReducer from './reducers/fikstürReducer'
import leagueReducer from './reducers/leagueReducer'
import teamReducer from './reducers/teamReducer'

const reducer = combineReducers({
  league: leagueReducer,
  team: teamReducer,
  fikstür: fikstürReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
