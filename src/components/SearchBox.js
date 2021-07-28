import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  border:2px solid #000;
  border-radius: 5px;
  padding: 15px;
  font-size: 17px;
  width:300px;
`;

function SearchBox(props){

  const [texto, setTexto] = useState('');
  
  function handleKeyUp(e) {
    if (e.keyCode == 13){
      if(props.onEnter){
        props.onEnter( texto );
      }
      setTexto('');
    }
  }

  return(
    <InputText 
    type="text" 
    value={texto}
    onChange={(e) => setTexto(e.target.value)}
    onKeyUp={handleKeyUp}

    placeholder={props.frasePadrao ?? "Digite alguma coisa"}/>
    //aqui estou dando a referencia do props para buscar frasePadrao que esta no App.js
    // e estou dizendo com (??) que se frasePadrao conter algo ele usa, se nao, ele coloca a frase que esta a frente;


  );
}

export default SearchBox;