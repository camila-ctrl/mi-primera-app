/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';

// function Button(props) {
//   const { times, onClick } = props;
function Button({ times, onClick }) {
  return (
    <button type="button" onClick={onClick}>Clickeado { times } veces</button>
  );
}

export default Button;
