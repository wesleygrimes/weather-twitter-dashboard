import React from 'react';

export function Loading({ isLoading }) {
  return isLoading ? (
    <div className="spinner-border text-secondary center" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <></>
  );
}
