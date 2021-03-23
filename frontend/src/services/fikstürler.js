import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/'
    : 'http://api.betcomment.com'

const getSuperLigFikstür = async () => {
  const baseUrl = `${API_URL}/fikstursuperlig`
  const response = await axios.get(baseUrl)
  return response.data
}
const getPremierLigFikstür = async () => {
  const baseUrl = `${API_URL}/fiksturpremier`
  const response = await axios.get(baseUrl)
  return response.data
}
const getBundesligaFikstür = async () => {
  const baseUrl = `${API_URL}/fiksturbundesliga`
  const response = await axios.get(baseUrl)
  return response.data
}
const getLaligaFikstür = async () => {
  const baseUrl = `${API_URL}/fiksturlaliga`
  const response = await axios.get(baseUrl)
  return response.data
}
const getSerieAFikstür = async () => {
  const baseUrl = `${API_URL}/fiksturseriea`
  const response = await axios.get(baseUrl)
  return response.data
}
const getLeagueOneFikstür = async () => {
  const baseUrl = `${API_URL}/fiksturligue1`
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  getSuperLigFikstür,
  getPremierLigFikstür,
  getBundesligaFikstür,
  getLaligaFikstür,
  getSerieAFikstür,
  getLeagueOneFikstür
}
