import React from 'react';
import './App.css';
import BalanceSection from './Components/BalanceSection'

function App() {
  return (
    <div className="App">
      <BalanceSection name = {'Income'} />
      <BalanceSection name = {'Expenses'}/>
    </div>
  );
}

export default App;
