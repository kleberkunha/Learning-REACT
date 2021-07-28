import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App (){

  const [searchText, setSeachText] = useState('');

  function handleSearchInput(novoTexto){
    setSeachText( novoTexto );

  }


  return (

    <>
    <h1>Lista de tarefas</h1>

    <SearchBox 
    frasePadrao= "Faça a sua busca..."
    onChangeText={handleSearchInput}/>
    <SearchBox 
    frasePadrao={searchText}/>
    <hr/>
    Texto procurado: {searchText}
    </>
  );
}

export default App;