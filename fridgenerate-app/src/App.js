import React from 'react';
import Landing from './LandingPage';
import IngredientsForm from './IngredientsForm';
import RecipesForm from './RecipesForm';
import TopNav from './TopNav';
import IngredientsSearch from './IngredientsSearch';


const App = () => {


  return (
    <div>
      <TopNav />
      <RecipesForm />
      <Landing />
      {/* <IngredientsForm /> */}
      <IngredientsSearch />
    </div>
    
  );
}

export default App;
