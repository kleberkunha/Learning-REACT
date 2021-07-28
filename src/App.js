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

  ///The codes of adding a new list are in this file and SeachBox.js

  function addAction(newItem){
    
    let newList = [...list, {title:newItem, done:false}];

    setList(newList);
  

  }



  return (
    <>
      <h1>Lista de tarefas</h1>

      <SearchBox 
        frasePadrao= "Adicione um item..."
        onEnter={addAction}
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