import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Dinner';
import Dinner from './Dinner';

function App() {
  return (
    <div className="App">
    <Dinner Dinner weet='Nihaari' sweet='Kheer' />
    </div>
  );
}

export default App;
