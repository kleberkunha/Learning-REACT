import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Categoria from './pages/categoria';
import Login from './pages/login';

const isLogged = false;


function App (){


  /*A pagina Home tera acesso livre, mas a sobre somente se estiver conectado */
  /* Primeira coisa a fazer é criar uma constante fora da funçao, essa constante ira verificar se estou logado ou nao;   --->  const isLogged = false; <--- */
  //Proximo passo é criar o ROUTE,
  /*
      <Route path="/sobre">
        {isLogged ? <Sobre/> : <Redirect to="/login"/>}
        se isLogged for true(?), ele acessa o conteudo <Sobre/>, caso contrario(:), ele é redirecionado para a pagina de login;
      </Route>
  */


      /*Segunda forma de fazer a ROTA PRIVADA */
    /*
    1- 
      const PrivateRoute = ({children, ...rest }) =>{
        return (
          <Route {...rest}>

          {isLogged ? children : <Redirect to="/login"/>}
        );
      };

    2-no lugar de <Route></Route>
      <PrivateRoute path="/sobre">
        <Sobre/>
      </PrivateRoute>
    */


  return (
    <>
    <BrowserRouter>
    <header>
      <h1>Meu Site Legal</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>

        </ul>
      </nav>
    </header>
    <hr/>
    <Switch>
      <Route exact path="/">
        <Home>

        </Home>
      </Route>
      
      <Route exact path="/login">
        <Login>

        </Login>
      </Route>


      <Route path="/sobre">
        {isLogged ? <Sobre/> : <Redirect to="/login"/>}
      </Route>

      <Route path="*">
        <h4>Pagina nao encontrada!</h4>
      </Route>
    </Switch>
    <hr/>
    <footer>
      Todos os direitos reservados...
    </footer>
    </BrowserRouter>
    </>

  );
}

export default App;