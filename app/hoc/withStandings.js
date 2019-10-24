import { withProps } from 'recompose'

export const MLB_URL = 'https://api.mobileqa.mlbinfra.com/api/interview/v1/records'

async function getStandings(){
  try {
    const response = await fetch(
      MLB_URL,
    );
    const responseJson = await response.json();
    return responseJson
  } catch (error) {
    console.error(error);
  }
}

export default withProps(_ => ({
  getStandings: async () => getStandings(),
}))
