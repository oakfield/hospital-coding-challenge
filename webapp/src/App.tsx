import React, { useEffect, useState } from 'react';
import './App.css';
import HospitalView from './views/HospitalView';

function App() {
  return (
    <div className="App">
      <header>Hospital Web App</header>
      <HospitalView />
    </div>
  );
}

export default App;
