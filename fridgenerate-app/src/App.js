import React from 'react';
import Landing from './LandingPage';
import IngredientsForm from './IngredientsForm';
import RecipesForm from './RecipesForm';
import TopNav from './TopNav';
import Test from './convert';


const App = () => {


  return (
    <div>
      <TopNav />
      <RecipesForm />
      <Landing />
      <IngredientsForm />
      <Test />
    </div>
    
  );
}

export default App;
