import React from 'react';
import './App.css';
import { Header } from './common';
import { Timelines } from './timelines';

export function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Timelines />
    </div>
  );
}
