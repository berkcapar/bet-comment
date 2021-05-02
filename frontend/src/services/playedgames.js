import axios from 'axios'

const API_URL = 'http://localhost:8000'

const getSuperLeaguePlayedGames = async () => {
  const baseUrl = `${API_URL}/superlig`
  const response = await axios.get(baseUrl)
  return response.data
}
const getPremierLeaguePlayedGames = async () => {
  const baseUrl = `${API_URL}/premierleague`
  const response = await axios.get(baseUrl)
  return response.data
}
const getLaLigaPlayedGames = async () => {
  const baseUrl = `${API_URL}/laliga`
  const response = await axios.get(baseUrl)
  return response.data
}
const getBundesligaPlayedGames = async () => {
  const baseUrl = `${API_URL}/bundesliga`
  const response = await axios.get(baseUrl)
  return response.data
}
const getLigueOnePlayedGames = async () => {
  const baseUrl = `${API_URL}/ligue1`
  const response = await axios.get(baseUrl)
  return response.data
}
const getSerieAPlayedGames = async () => {
  const baseUrl = `${API_URL}/seriea`
  const response = await axios.get(baseUrl)
  return response.data
}

const getAllLeaguePlayedGames = async () => {
  const baseUrl = `${API_URL}/butunligler`
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  getSuperLeaguePlayedGames,
  getAllLeaguePlayedGames,
  getPremierLeaguePlayedGames,
  getLaLigaPlayedGames,
  getBundesligaPlayedGames,
  getLigueOnePlayedGames,
  getSerieAPlayedGames
}
