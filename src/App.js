import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid black;
`;



function App() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] =useState('');

  const handleEmailInput = (e) =>{
    setEmail( e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword (e.target.value);
  }

  const handleButton = () => {
    alert(email+ ' '+ password);
  }
  
  return (
    <>
  <input placeholder="digite um email" type="email" value={email} onChange={handleEmailInput}/>
  <input placeholder="digite uma senha" type="password" value={password} onChange={handlePasswordInput}/>
  <button onClick={handleButton} >Dizer</button>
    </>
  );
}
export default App;