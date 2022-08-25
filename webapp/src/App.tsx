import React from 'react';
import './App.css';
import HospitalView from './views/HospitalView';
import Hospital from './types/Hospital';

function App() {
  let hospitals = [
    {
      hospitalId: 1,
      name: 'Test',
      createdAt: new Date()
    }
  ] as Hospital[];

  return (
    <div className="App">
      <HospitalView hospitals={hospitals} />
    </div>
  );
}

export default App;
