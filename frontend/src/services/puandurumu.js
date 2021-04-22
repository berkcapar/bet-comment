import axios from 'axios'

const API_URL = 'http://localhost:8000'

const getSuperLigPuanDurumu = async () => {
  const baseUrl = `${API_URL}/puanturkiye`
  const response = await axios.get(baseUrl)
  return response.data
}
const getPremierLigPuanDurumu = async () => {
  const baseUrl = `${API_URL}/puaningiltere`
  const response = await axios.get(baseUrl)
  return response.data
}
const getBundesligaPuanDurumu = async () => {
  const baseUrl = `${API_URL}/puanalmanya`
  const response = await axios.get(baseUrl)
  return response.data
}
const getLaligaPuanDurumu = async () => {
  const baseUrl = `${API_URL}/puanispanya`
  const response = await axios.get(baseUrl)
  return response.data
}
const getSerieAPuanDurumu = async () => {
  const baseUrl = `${API_URL}/puanitalya`
  const response = await axios.get(baseUrl)
  return response.data
}
const getLeagueOnePuanDurumu = async () => {
  const baseUrl = `${API_URL}/puanfransa`
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  getSuperLigPuanDurumu,
  getPremierLigPuanDurumu,
  getBundesligaPuanDurumu,
  getLaligaPuanDurumu,
  getSerieAPuanDurumu,
  getLeagueOnePuanDurumu
}
