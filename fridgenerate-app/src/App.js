import React from 'react';
import Landing from './LandingPage';
import RecipesSearch from './RecipesSearch';
import TopNav from './TopNav';
import IngredientsSearch from './IngredientsSearch';
import RecipeListing from './RecipesListing';
import RecipeDetails from './RecipeDetails';


const App = () => {


  return (
    <div>
      <TopNav />
      <RecipesSearch />
      <Landing />
      <IngredientsSearch />
      <RecipeListing />
      <RecipeDetails />
    </div>
    
  );
}

export default App;
