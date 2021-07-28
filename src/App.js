import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App (){

  const [name, setName] = useState (localStorage.getItem('name'));

  useEffect(() => {
    localStorage.setItem('name', name);

  },[name]);

  return (
    <>
  <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    </>
  );
}

export default App;