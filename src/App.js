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
            <Link to="/categoria/esportes">Esportes</Link>
          </li>
          <li>
            <Link to="/categoria/noticias">Noticias</Link>
          </li>
          <li>
            <Link to="/categoria/viagem">viagem</Link>
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
      <Route path="/categoria/:cat/:outraVariavel">
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
    //Switch+Route usado para criar as rotas, as rotas vao indicar qual pagina sera aberta, criando as possiveis URL que meu sira ira conter;
    //NO ROUTER é necessario adicionar "exact" antes do path, isso ira dizer que somente se o PATH for exatamente PATH, no caso uma barra /, se nao adicionar isso nao sera possivel trocar de tela
    //NO ROUTER de categoria o (:cat) diz que qualquer coisa que venha apos a barra(/) depois de categoria sera salvo na variavel CAT;
    //CAT é so um exemplo inicial, caso eu precise criar uma outra URL depois das URL's de CAT, basta eu separar com uma (/) e adicionar a nova variavel :OutraVariavel;
    );
}

export default App;