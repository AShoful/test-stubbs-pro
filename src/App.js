import React from 'react';
import './App.css';
import BalanceSection from './Components/BalanceSection'

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <BalanceSection name = {'Expenses'}/>
      <BalanceSection name = {'Income'} />
    </div>
    </React.Fragment>
  );
}

export default App;
