import React from 'react';

export function Error({ error }) {
  return error ? <h3>{{ error }}</h3> : <></>;
}
