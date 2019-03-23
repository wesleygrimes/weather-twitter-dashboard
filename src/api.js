import axios from 'axios';
const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

async function getTweets(hashtag) {
  const result = await axios.get(`${baseApiUrl}/timeline`, {
    params: { hashtag }
  });
  return result.data.statuses;
}

export { getTweets };
