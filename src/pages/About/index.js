import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
  return(
    <div>
      <h1>About page!!!</h1>

      <Link to="/about">About</Link>
    </div>
  );
}


export default Page;