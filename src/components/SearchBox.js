import React, {useState} from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  border:2px solid #000;
  border-radius: 5px;
  padding: 15px;
  font-size: 17px;
  width:300px;
`;


function SearchBox(props){

  return(
    <InputText 
    type="text" 
    placeholder={props.frasePadrao ?? "Digite alguma coisa"}/>
    //aqui estou dando a referencia do props para buscar frasePadrao que esta no App.js
    // e estou dizendo com (??) que se frasePadrao conter algo ele usa, se nao, ele coloca a frase que esta a frente;
  );
}

export default SearchBox;