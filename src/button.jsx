import React, { useState } from 'react';
import './App.css';

function Button() {
  const [times, setTimes] = useState(0);
  function handleClick() {
    setTimes(times + 1);
  }
  return (
    <button type="button" onClick={handleClick}>Clickeado { times } veces</button>
  );
}

export default Button;
