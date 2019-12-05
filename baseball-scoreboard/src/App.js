import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from "./components/Display";





function App() {
  const [strikes, setStrikes] = useState(0);
  let [balls, setBalls] = useState(0);

  const addBall = () => {
    if (balls < 4) {
      setBalls(balls + 1)
    } else {
      setBalls(balls - balls)
      setStrikes(strikes - strikes)
    }
  }

  const addStrike = () => {
    if (strikes < 3) {
      setStrikes(strikes + 1)
    }
    else {
      setStrikes(strikes - strikes)
      setBalls(balls - balls)
    }
  }

  const addHit = () => {
    setStrikes(strikes - strikes)
    setBalls(balls - balls)
  }

  const addFoul = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1)
    }
    else { setStrikes(2) }
  }


  return (
    <div className="App">
      <h1>Baseball Scorecard</h1>
      <Display balls={balls} strikes={strikes} />
      <Dashboard addStrike={addStrike} addBall={addBall} addFoul={addFoul} addHit={addHit} />
    </div>
  );
}

export default App;
