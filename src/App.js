import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';


function App (){

  const [contagem, setContagem]= useState(0);


  useEffect(() => {
    document.title = "Contagem: "+contagem;
  }, [contagem]);
  //a funçao useEffect recebe sempre 2 parametros;
  // () => {} é a funçao que vai executar quando alguma coisa acontecer;
  // [] é o observador, vai observar as variaveis, e quando uma dessas variaveis mudar
  //ele executa a funçao () => {};

  function aumentarAction() {
    setContagem(contagem + 1);
  }

  return (
    <>
    <h1>Contagem: {contagem}</h1>
    <button onClick={aumentarAction}>Aumentar Numero</button>


    </>
  );
}

export default App;