import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Categoria from './pages/categoria';

function App (){


  /*

  Fazendo redirecionamento de rota;
  Primeira coisa a fazer é importar REDIRECT;
  (import { BrowserRouter, Switch, Route, Link, ----->>>>  Redirect  <<<<------ } from 'react-router-dom';)

  depois crie o link  
    <li>
      <Link to="/quem-somos">Quem somos</Link>
    </li>




    depois crie a ROTA usando o Redirect que ira dizer para onde sera redirecionado usando o to="NOME da ROUTE para a qual sera redirecionado";
      <Route path="/quem-somos">
        <Redirect to="/sobre"/>
      </Route>
  
  
  
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
          <li>
            <Link to="/quem-somos">Quem somos</Link>
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
          <li>
            <Link to="/fdgdhjhfgr">url que nao existe</Link>
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

      <Route path="/quem-somos">
        <Redirect to="/sobre"/>
      </Route>

      <Route path="/categoria">
        <Categoria>

        </Categoria>
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