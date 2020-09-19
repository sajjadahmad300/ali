import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Dinner';

function App() {
  return (
    <div className="App">
      <Dinner dishName='Nihaari' sweetDish='Kheer' />
      <hr />
      <Dinner dishName='Biryani' sweetDish='Jaleebi' />
      <hr />
      <Dinner dishName='Karahi' sweetDish='Gajar ka Halwa' />
    </div>
  );
}

export default App;
