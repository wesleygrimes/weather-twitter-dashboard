require('dotenv').config();

import axios from 'axios';
import { Tweet } from 'types/Tweet';
import { LambdaEvent } from '../types/LambdaEvent';
import { LambdaResponse } from '../types/LambdaResponse';
import { RawTwitterResponse } from '../types/RawTwitterResponse';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
};

async function getEmbedHtmlForTweet(tweet: Tweet): Promise<RawTwitterResponse> {
  const tweetUrl = `https://twitter.com/${tweet.user.screen_name}/status/${
    tweet.id_str
  }`;

  const response = await axios.get<any>('https://publish.twitter.com/oembed', {
    params: {
      url: tweetUrl
    }
  });

  return response.data;
}

export async function handler(
  event: LambdaEvent,
  context: any
): Promise<LambdaResponse> {
  try {
    const tweet = JSON.parse(event.body);
    const embed = await getEmbedHtmlForTweet(tweet);

    return {
      statusCode: 200,
      body: JSON.stringify(embed),
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
