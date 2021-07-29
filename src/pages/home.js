import React from 'react';
//import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';


function Home(){
  //EASY WAY
  const dispatch = useDispatch();
  const name = useSelector(state => state.usuario.name);
  const contador = useSelector(state => state.usuario.contador);

  const handleKleber = () =>{
    dispatch({
      type: 'SET_NAME',
      payload: { name: 'Jhon'}
    });
  };

  const handleIncrement = () =>{
    dispatch({
      type: 'INCREMENT_CONTADOR'
    });
  };

  return (
    <div>
      <h4>Pagina Home</h4>
      NOME: {name}<br/>
      CONTAGEM: {contador}
      <br/>
      <button onClick={handleKleber}>Setar nome para Kleber</button>
      <button onClick={handleIncrement}>+1</button>

      <br/><br/>
    </div>
  );
}

export default Home;


/*
HARD WAY to get the information of the reducer
const mapStateToProps = (state) => {
  return {
    name: state.usuario.name,
    contador: state.usuario.contador
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (newName) => dispatch({
      type: 'SET_NAME',
      payload: { name:newName}
    }),
    increment: () => dispatch({
      type: 'INCREMENT_CONTADOR'
    })
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
*/