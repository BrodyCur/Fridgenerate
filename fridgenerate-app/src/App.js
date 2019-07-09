import React from 'react';
import Landing from './LandingPage';
import IngredientsForm from './IngredientsForm';
import RecipesForm from './RecipesForm';
import TopNav from './TopNav';

const App = () => {
  return (
    <div>
      <TopNav />
      <RecipesForm />
      <Landing />
      <IngredientsForm />
    </div>
    
  );
}

export default App;
