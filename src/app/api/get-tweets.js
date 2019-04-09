import axios from 'axios';

export async function getTweets(hashtag) {
  try {
    const result = await axios.get(`/.netlify/functions/timeline`, {
      params: { hashtag }
    });
    return result.data.statuses;
  } catch (error) {
    console.error({ error });
  }
}
