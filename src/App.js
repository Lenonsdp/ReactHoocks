import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {

  const [ tech, setTech ] = useState([]);

  const [ newTech, setNewTech ] = useState('');

  const addTech = useCallback(() => {
    setTech([...tech, newTech]);

    setNewTech('');
  }, [newTech, tech]);

  useEffect(() => {
    const techStorage = localStorage.getItem('techs');

    if (techStorage) {
      setTech(JSON.parse(techStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
    <ul>
      {tech.map(t =>(
        <li key={t}>{t}</li>
      ))}
    </ul>
      <string>Você adicionou {techSize} ferramentas</string>
      <br/>
    <input value={newTech} onChange={ e => setNewTech(e.target.value)} />
    <button type='button' onClick={addTech}>
      Adicionar
    </button>
    </>
  );
}

export default App;
