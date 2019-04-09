import axios from 'axios';
const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export async function getTweets(hashtag) {
  try {
    const result = await axios.get(`${baseApiUrl}/timeline`, {
      params: { hashtag }
    });
    return result.data.statuses;
  } catch (error) {
    console.error({ error });
  }
}
