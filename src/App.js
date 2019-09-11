import React  from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation titulo="Navegando" />
      <h1 class= "display-1"> Con booooooootstrap</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
