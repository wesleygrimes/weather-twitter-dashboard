import React, { useState } from 'react';
import { Timeline } from './Timeline';

export function Timelines() {
  const [hashtags] = useState(['tnwx', 'ncwx', 'flwx', 'azwx']);
  return (
    <div className="row">
      {hashtags && hashtags.length > 0 ? (
        hashtags.map(hashtag => (
          <Timeline incomingHashtag={hashtag} key={hashtag} />
        ))
      ) : (
        <div className="col">
          <h3>No Timelines</h3>
        </div>
      )}
    </div>
  );
}
