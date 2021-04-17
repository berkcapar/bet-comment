import axios from 'axios'

const API_URL = 'http://localhost:8000'

const getSuperLeaguePlayedGames = async () => {
  const baseUrl = `${API_URL}/superlig`
  const response = await axios.get(baseUrl)
  return response.data
}
export default { getSuperLeaguePlayedGames }
