import React from 'react';
import {useParams} from 'react-router-dom';
//Para pegar o CAT é necessario importar o useParams, apois importado basta criar um {cat} que ira receber useParams();
//useParams esta pegando o endereço apos a barra(/), no caso aquele endereço [esportes,noticias,viagem], que foi salvo dentro do :cat;
//O valor de cat dentro de return é o valor de cara URL depois da (/), o valor de cat ira mudar cada vez que o url mudar;
//CAT é so um exemplo inicial, caso eu precise criar uma outra URL depois das URL's de CAT, basta eu separar com uma (/) e adicionar a nova variavel :OutraVariavel;
//

function Categoria(){

  let { cat, outraVariavel } = useParams();
  
  return (
    <div>
      <h4>Pagina Categoria</h4>
      Exibindo items da categoria: {cat}
    </div>
  );
}
export default Categoria;