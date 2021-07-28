import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App (){

  ///DISPLAYING LIST
  const [searchText, setSeachText] = useState('');

  //creating state
  const [list, setList] = useState([]);

  useEffect(()=>{
    setList([
      {title:'Comprar o bolo', done:false},
      {title:'Pegar o cachorro no Petshop', done:true},
      {title:'Gravar aula', done:false}
    ]);
  }, []);

  function handleSearchInput(novoTexto){
    setSeachText( novoTexto );
  }


  return (
    <>
      <h1>Lista de tarefas</h1>

      <SearchBox 
        frasePadrao= "Faça a sua busca..."
        onChangeText={handleSearchInput}
      />

      <hr/>
      <ul>
        {list.map((item, index) => {
          return(
            <li key={index}>{item.title} -- {item.done.toString()}</li>
          );
        })}
      </ul>
    </>
  );
}

export default App;