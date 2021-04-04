import axios from 'axios'

const API_URL = 'http://localhost:8000'

const getSuperLigPlayers = async () => {
  const baseUrl = `${API_URL}/superligoyuncu`
  const response = await axios.get(baseUrl)
  return response.data
}
export default { getSuperLigPlayers }
