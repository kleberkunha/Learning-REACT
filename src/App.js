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
    //Para a pagina nao encontrada preciso criar um novo ROUTE mas que o PATH sera "*", isso significa que acceita todas as urls,
    //o programa vai ler todas as ROUTE de cima ate em baixo, caso a url que tenha sido digitada nao se encontra nos ROUTE especificados entao essa url sera jogada 
    //para o ROUTE "*", que contem uma mensagem direta de "PAGINA NAO ENCONTRADA";
    //Para realmente criar uma pagina que diz, pagina nao encontrada ou erro404, basta colocar dentro do <ROUTE><NotFoundPage>, criar um ROUTE como os outros mas que sera indicado para pagina de erro
    //a mesma coisa como as outras paginas,/pages/notfoundpage.js;
  );
}

export default App;