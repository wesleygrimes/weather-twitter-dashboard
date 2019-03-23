import axios from 'axios';
const baseApiUrl = `http://localhost:9000/.netlify/functions`;

async function getTweets(hashtag) {
  const result = await axios.get(`${baseApiUrl}/timeline`, {
    params: { hashtag }
  });
  return result.data.statuses;
}

export { getTweets };
