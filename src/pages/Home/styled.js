import styled from 'styled-components';

export const SearchArea = styled.div`
background-color: black;
border-bottom:#CCC;
padding:20px 0px;


  .searchBox{
    background-color: rgb(60,60,60);
    padding: 20px 15px;
    border-radius:5px;
    box-shadow:1px 1px 1px 0.3px rgba(0,0,0,0.2);
    display:flex;
  }

  form{
    flex:1;
    display:flex;

    input, select{
      height:40px;
      border:0px;
      border-radius:5px;
      outline:0;
      font-size:15px;
      color:#000;
      margin-right:20px;
    }

    input{
      flex:1;
      padding:0px 10px;
    }

    select{
      width:100px;
    }

    button{
      background-color: #49AEEF;
      font-size:15px;
      border:0;
      border-radius:5px;
      color:#FFF;
      height:40px;
      padding:0px 20px;
      cursor:pointer;
      font-weight:700;
    }
  }
`;

export const PageArea = styled.div`

`;