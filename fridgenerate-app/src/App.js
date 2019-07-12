import React from 'react';
import Landing from './LandingPage';
import RecipeListing from './RecipesListing';
import RecipeDetails from './RecipeDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {


  return ( 
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/recipes" component={RecipeListing} />
        <Route path="/recipe-details" component={RecipeDetails} />
      </Switch>
    </div>
    </Router> 
    
  );
}

export default App;
