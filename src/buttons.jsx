import React, { useState } from 'react';
import './App.css';
import Button from './button';

function Buttons() {
  const [times, setTimes] = useState(0);
  const handleClick = () => {
    setTimes(times + 1);
  };
  return (
    <div className="Buttons">
      <Button times={times} onClick={handleClick} />
      <Button times={times} onClick={handleClick} />
    </div>
  );
}

export default Buttons;
