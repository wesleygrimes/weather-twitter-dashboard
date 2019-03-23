import axios from 'axios';
import { LambdaEvent } from '../types/LambdaEvent';
import { LambdaResponse } from '../types/LambdaResponse';
import { RawTwitterResponse } from '../types/RawTwitterResponse';

require('dotenv').config();

const {
  TWITTER_API_BASEURL,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET
} = process.env;

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
};

async function getBearerToken(): Promise<string> {
  const basicToken = Buffer.from(
    `${TWITTER_CONSUMER_KEY}:${TWITTER_CONSUMER_SECRET}`
  ).toString('base64');

  const response = await axios.post<{ access_token: string }>(
    `${TWITTER_API_BASEURL}/oauth2/token`,
    'grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${basicToken}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }
  );

  return response.data.access_token;
}

async function getTimelineForHashtag(
  bearerToken: string,
  hashtag: string
): Promise<RawTwitterResponse> {
  const response = await axios.get<RawTwitterResponse>(
    `${TWITTER_API_BASEURL}/1.1/search/tweets.json`,
    {
      params: {
        q: `#${hashtag}`
      },
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    }
  );

  return response.data;
}

export async function handler(
  event: LambdaEvent,
  context: any
): Promise<LambdaResponse> {
  try {
    const hashtag = event.queryStringParameters.hashtag || 'ncwx';

    const bearerToken = await getBearerToken();
    const timeline = await getTimelineForHashtag(bearerToken, hashtag);

    return {
      statusCode: 200,
      body: JSON.stringify(timeline),
      headers
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.response ? error.response.data : error.message
      })
    };
  }
}
