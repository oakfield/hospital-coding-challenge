import React, { useEffect, useState } from 'react';
import './App.css';
import HospitalView from './views/HospitalView';

function App() {
  const [loading, setLoading] = useState(true);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const apiUrl = `https://localhost:5001/Hospitals`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((hospitals) => {
        setLoading(false);
        setHospitals(hospitals);
      });
  }, [setLoading, setHospitals]);

  return (
    <div className="App">
      <header>Hospital Web App</header>
      <HospitalView hospitals={hospitals} />
    </div>
  );
}

export default App;
