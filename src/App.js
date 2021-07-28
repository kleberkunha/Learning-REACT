import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';


function App (){

  const [total, setTotal] = useState('');
  const handleTotal = (e) => {
    setTotal (e.target.value);
  }

  const [gorjeta, setGorjeta] = useState('');

  const handleGorjeta = (e) => {
    setGorjeta(e.target.value)
  }
  let totalGorjeta = (total * gorjeta / 100);
  let Total = parseInt(total);
  let fullTotal = totalGorjeta + Total;
  return (
    <>
    <h1>Calculadora de Gorjeta</h1>
    <p>Quanto deu a conta?</p>
    <input type="number" value={total} onChange={handleTotal}></input>
    <p>Qual a porcentagem da gorjeta ?</p>  
    <input type="number" value={gorjeta} onChange={handleGorjeta}></input> 
    <hr></hr>
    <p>Subtotal: R$ {total}</p>
    <p>Gorjeta({gorjeta}%): R$ {totalGorjeta}</p>
    <h2>Total: R$ {fullTotal}</h2>
    </>
  );
}

export default App;