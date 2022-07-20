import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function InputWithName() {
  const [name, setName] = useState('');
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://random-data-api.com/api/users/random_user');
      setName(response.data.first_name);
    }
    fetchData();
  }, []);
  return (
    <input type="text" placeholder="Ingrese texto" onChange={(e) => setName(e.target.value)} value={name} />
  );
}

export default InputWithName;
