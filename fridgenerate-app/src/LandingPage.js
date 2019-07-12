import React from 'react';
import TopNav from './TopNav';
import RecipesSearch from './RecipesSearch';
import IngredientsSearch from './IngredientsSearch';


const Landing = () => {
  return (
    <div>
    <TopNav />
    <RecipesSearch />
    <section className="Landing">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="Landing-title">
          <h2>Add your ingredients and receive matching recipes instantly !</h2>
        </div>
    </section>
    <IngredientsSearch />
    </div>
     
  );
}

export default Landing;