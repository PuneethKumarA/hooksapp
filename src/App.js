import logo from './logo.svg';
import './App.css';
import DataFetching from './components/hooks/DataFetching';
import ComponentA from './components/contexthook/ComponentA';
import React from 'react';
import CounterOne from './components/reducerhook/CounterOne';




function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'puneeth'} >
        <CounterOne/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
