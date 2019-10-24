import { withProps } from 'recompose'
import axios          from 'axios'

export const MLB_URL = 'https://api.mobileqa.mlbinfra.com/api/interview/v1/records'

async function getStandings(){
  try {
    const response = await axios.get(
      MLB_URL,
    );
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export default withProps(_ => ({
  getStandings: async () => getStandings(),
}))
