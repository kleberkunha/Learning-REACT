import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Categoria from './pages/categoria';
import Login from './pages/login';

const isLogged = false;


function App (){
  
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