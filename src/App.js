import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App (){
  //Nesse Exo estou aprendendo a separa componentes;
  //criei uma pasta chamada components, e dentro dela criei um arquivo JS
  //dentro desse arquivo JS estou criando uma nova funçao
  //essa funçao criada esta gerando um input que podera ser usado sem ter que repetir o codigo



  return (

    //frasePadrao é um props entao no arquivo SearchBox vou faze a referencia dele --->>
    <>
    <h1>Lista de tarefas</h1>

    <SearchBox frasePadrao= "Faça a sua busca..."/>
    <SearchBox frasePadrao= "Digite seu nome"/>
    <SearchBox/>
    </>
  );
}

export default App;