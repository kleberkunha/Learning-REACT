import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';
import Modal from './components/Modal';

function App (){

  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  }



  return (
    <>
    <button onClick={handleButtonClick}>Abrir modal</button>
    <Modal visible={modalVisible} setVisible={setModalVisible}>
      <h1>testando 123</h1>
    </Modal>
    </>
  );
}

export default App;