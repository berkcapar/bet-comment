import axios from 'axios'

const API_URL = 'http://localhost:8000'

const getTeams = async () => {
  const baseUrl = `${API_URL}/takimlar`
  const response = await axios.get(baseUrl)
  return response.data
}
export default { getTeams }
