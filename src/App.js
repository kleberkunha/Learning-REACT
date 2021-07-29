import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Categoria from './pages/categoria';

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
          <li>
            <Link to="/categoria?tipo=esportes">Esportes</Link>
          </li>
          <li>
            <Link to="/categoria?tipo=noticias">Noticias</Link>
          </li>
          <li>
            <Link to="/categoria?tipo=viagem">viagem</Link>
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
      <Route path="/sobre">
        <Sobre>

        </Sobre>
      </Route>
      <Route path="/categoria">
        <Categoria>

        </Categoria>
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