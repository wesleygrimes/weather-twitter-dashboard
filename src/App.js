import React, { useEffect, useState } from 'react';
import { getTweets } from './api';
import './App.css';

function Error({ error }) {
  return error ? <h3>{{ error }}</h3> : <></>;
}

function Loading({ isLoading }) {
  return isLoading ? (
    <div className="spinner-border text-secondary center" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <></>
  );
}

function Tweets({ tweets }) {
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

function Timeline({ incomingHashtag }) {
  const [hashtag, setHashtag] = useState(incomingHashtag);
  const [tempHashtag, setTempHashtag] = useState(null);
  const [timeline, setTimeline] = useState({});

  function handleClick(e) {
    e.preventDefault();

    if (timeline.editMode) {
      setHashtag(tempHashtag);
    }

    toggleEditMode(timeline.id);
  }

  function handleInputChange(e) {
    setTempHashtag(e.target.value);
  }

  function toggleEditMode() {
    const newTimeline = { ...timeline, editMode: !timeline.editMode };
    setTimeline(newTimeline);
  }

  async function fetchTimeline() {
    setTimeline({ ...timeline, loading: true, error: null });
    const tweets = await getTweets(hashtag);
    setTimeline({ ...timeline, loading: false, error: null, tweets });
  }

  useEffect(() => {
    fetchTimeline();
  }, [hashtag]);

  return (
    <div className="timeline col-md m-2 border bg-light">
      {timeline.editMode ? (
        <input
          type="text"
          defaultValue={tempHashtag}
          onChange={handleInputChange}
        />
      ) : (
        <h3>#{hashtag}</h3>
      )}
      <button onClick={handleClick}>
        {timeline.editMode ? 'save' : 'edit'}
      </button>
      <Loading isLoading={timeline.loading} />
      <Error error={timeline.error} />
      <Tweets tweets={timeline.tweets} />
    </div>
  );
}

function Timelines() {
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

function Header() {
  return (
    <div className="row">
      <div className="col">
        <h1>Weather Twitter Dashboard</h1>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Timelines />
    </div>
  );
}

export default App;
