/** Renderizar first_name, last_name, email, avatar, date_of_birth */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputWithName from './inputWithName';
import Button from './button';

function App() { // componente react
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputWithName />
        <Button />
        <Button />

        <p>
          Hello world!
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
