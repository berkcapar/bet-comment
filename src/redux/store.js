import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import leagueReducer from './reducers/leagueReducer'
import teamReducer from './reducers/teamReducer'

const reducer = combineReducers({
  league: leagueReducer,
  team: teamReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
