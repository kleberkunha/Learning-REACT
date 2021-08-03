import React, {useState, useEffect} from 'react';
import {SearchArea,PageArea} from './styled';
import useApi from '../../helpers/RpmApi';
import {PageContainer} from '../../components/MainComponents'
import { Link } from 'react-router-dom';

const Page = () =>{

  const api = useApi();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    const getState = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    }
    getState();
  }, []);

  useEffect(()=> {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    }
    getCategories();
  }, []);



  return(
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="Search.."/>
              <select name="state">
                {stateList.map((i,k)=>
                  <option key={k} value={i.name}>{i.name}</option>  
                )}
              </select>
              <button>Search</button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((i,k)=>
                <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                  <img src={i.img} alt=""/>
                  <span>{i.name}</span>
                </Link>    
            )}
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          ....
        </PageArea>
      </PageContainer>
    </>

  );
}

export default Page;