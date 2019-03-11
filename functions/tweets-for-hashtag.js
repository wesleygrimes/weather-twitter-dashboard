const {
  TWITTER_API_BASEURL,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET
} = process.env;

// const TWITTER_API_BASEURL =
//   'https://api.twitter.com/1.1/search/tweets.json?q=%23ncwx';
// const TWITTER_CONSUMER_KEY = 'P6sTxkSb4vZGZgiKA6ZYIiqjq';
// const TWITTER_CONSUMER_SECRET =
//   'zyJ6z3PAxUh8CyJzlEAucevRa2dg7x7EiXZ73i41EfQvxnDUM1';

exports.handler = async (event, context) => {
  // return fetch(TWITTER_API_BASEURL)
  //   .then(response => response.json())
  //   .then(data => ({
  //     statusCode: 200,
  //     body: `${data.setup} ${data.punchline} *BA DUM TSSS*`
  //   }))
  //   .catch(error => ({ statusCode: 422, body: String(error) }));

  return {
    statusCode: 200,
    body: {
      TWITTER_API_BASEURL: TWITTER_API_BASEURL,
      TWITTER_CONSUMER_KEY: TWITTER_CONSUMER_KEY,
      TWITTER_CONSUMER_SECRET: TWITTER_CONSUMER_SECRET
    }
  };
};
