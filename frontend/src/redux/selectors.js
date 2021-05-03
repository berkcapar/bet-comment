//fikstürler
export const getSuperLigFiksturFromState = (state) => state.SuperLigFikstür
export const getPremierLigFikstürFromState = (state) => state.PremierLigFikstür
export const getBundesligaFikstürFromState = (state) => state.BundesligaFikstür
export const getLaLigaFikstürFromState = (state) => state.LaLigaFikstür
export const getLigueOneFikstürFromState = (state) => state.LigueOneFikstür
export const getAllFikstürFromState = (state) => state.fetchAllFikstür
//played + fikstür
export const getPlayedPlusFikstürFromState = (state) =>
  state.fetchPlayedPlusFikstür
//oyuncular
export const getSuperLigPlayersFromState = (state) => state.SuperLigPlayers
//oynanan maçlar
export const getSuperLigPlayedGamesFromState = (state) =>
  state.SuperLigPlayedGames
export const getAllLigPLayedGamesFromState = (state) =>
  state.AllLeaguePlayedGames
//puan durumu
export const getAllPuanDurumuFromState = (state) => state.AllPuanDurumu
export const getSuperLigPuanDurumuFromState = (state) =>
  state.SuperLigPuanDurumu
export const getPremierLigPuanDurumuFromState = (state) =>
  state.PremierLigPuanDurumu
export const getBundesligaPuanDurumuFromState = (state) =>
  state.BundesligaPuanDurumu
export const getLaLigaPuanDurumuFromState = (state) => state.LaLigaPuanDurumu
export const getSerieAPuanDurumuFromState = (state) => state.SerieAPuanDurumu
export const getLeagueOnePuanDurumuFromState = (state) =>
  state.LeagueOnePuanDurumu
//takım detayları
export const getTeamDetailsFromState = (state) => state.TeamDetails
