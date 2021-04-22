import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import SuperLigFikstürReducer from './reducers/fikstür/SuperLigFikstürReducer'
import PremierLigFikstürReducer from './reducers/fikstür/PremierLigFikstürReducer'
import leagueReducer from './reducers/leagueReducer'
import BundesligaFikstürReducer from './reducers/fikstür/BundesLigaFikstürReducer'
import LaLigaFikstürReducer from './reducers/fikstür/LaLigaFikstürReducer'
import LigueOneFikstürReducer from './reducers/fikstür/LigueOneFikstürReducer'
import SuperLigPlayerReducer from './reducers/players/SuperLigPlayersReducer'
import SuperLigPlayedGamesReducer from './reducers/playedgames/SuperLeaguePlayedGamesReducer'
import AllFikstürReducer from './reducers/fikstür/AllFikstürReducer'
import PremierLigPuanDurumuReducer from './reducers/puandurumu/PremierLigPuanDurumuReducer'
import SuperLigPuanDurumuReducer from './reducers/puandurumu/SuperLigPuanDurumuReducer'
import BundesligaPuanDurumuReducer from './reducers/puandurumu/BundesligaPuanDurumuReducer'
import LaLigaPuanDurumuReducer from './reducers/puandurumu/LaLigaPuanDurumuReducer'
import SerieAPuanDurumuReducer from './reducers/puandurumu/SerieAPuanDurumuReducer'
import LigueOnePuanDurumuReducer from './reducers/puandurumu/LigueOnePuanDurumuReducer'
import TeamDetailsReducer from './reducers/teamReducer'

const reducer = combineReducers({
  league: leagueReducer,
  //fikstür
  SuperLigFikstür: SuperLigFikstürReducer,
  PremierLigFikstür: PremierLigFikstürReducer,
  BundesligaFikstür: BundesligaFikstürReducer,
  LaLigaFikstür: LaLigaFikstürReducer,
  LigueOneFikstür: LigueOneFikstürReducer,
  SuperLigPlayers: SuperLigPlayerReducer,
  fetchAllFikstür: AllFikstürReducer,
  //playedgames
  SuperLigPlayedGames: SuperLigPlayedGamesReducer,
  //puan durumu
  SuperLigPuanDurumu: SuperLigPuanDurumuReducer,
  PremierLigPuanDurumu: PremierLigPuanDurumuReducer,
  BundesligaPuanDurumu: BundesligaPuanDurumuReducer,
  LaLigaPuanDurumu: LaLigaPuanDurumuReducer,
  SerieAPuanDurumu: SerieAPuanDurumuReducer,
  LeagueOnePuanDurumu: LigueOnePuanDurumuReducer,
  //team details
  TeamDetails: TeamDetailsReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
