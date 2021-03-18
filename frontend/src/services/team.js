import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'http://api.betcomment.com'

const baseUrl = `${API_URL}/api/teams`

const getTeams = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
export default { getTeams }
