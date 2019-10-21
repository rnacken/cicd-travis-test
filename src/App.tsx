import React from 'react';
import logo from './logo.svg';
import './App.css';
import { double } from './utils/double';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>2 times 2 is {double(2)}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
