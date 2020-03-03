import React from 'react';
import './App.css';
import BalanceSection from './Components/BalanceSection';

function App() {
  return (
    <>
      <div className="App">
        <BalanceSection name="Expenses" />
        <BalanceSection name="Income" />
      </div>
    </>
  );
}

export default App;
