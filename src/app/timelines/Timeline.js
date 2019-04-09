import React, { useEffect, useState } from 'react';
import { getTweets } from '../api';
import { Error, Loading } from '../common';
import { Tweets } from './Tweets';

export function Timeline({ incomingHashtag }) {
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
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        onClick={handleClick}
      >
        {timeline.editMode ? 'save' : 'edit'}
      </button>
      <Loading isLoading={timeline.loading} />
      <Error error={timeline.error} />
      <Tweets tweets={timeline.tweets} />
    </div>
  );
}
