import React from 'react';
import Landing from './LandingPage';
import RecipeDetails from './RecipeDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {


  return ( 
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/recipe-details/" component={RecipeDetails} />
      </Switch>
    </div>
    </Router> 
    
  );
}

export default App;
