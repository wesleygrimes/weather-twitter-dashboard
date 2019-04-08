import React from 'react';

export function Tweets({ tweets }) {
  return tweets ? (
    tweets.map(tweet => (
      <div className="card m-2" key={tweet.id}>
        <div className="card-body">{tweet.text}</div>
      </div>
    ))
  ) : (
    <></>
  );
}
