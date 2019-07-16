import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter }  from 'react-router-dom';
import Landing from './LandingPage';
import TopNav from './TopNav';
import RecipeListing from './RecipesListing';
import RecipeDetails from './RecipeDetails';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const AuthButton = withRouter(
  ({ history }) => {

    let userLoggedIn = localStorage.getItem('token') ? true : false;

    const handle_logout = (e) => {
      e.preventDefault()
      localStorage.removeItem('token');
      history.push("/") 
    }

    return (
      <div className="user_authentication">
          {userLoggedIn ? (
            <ul>
              <li>
                <a href="/" onClick={e => handle_logout(e)}>Logout</a>
              </li>
            </ul>
          ) : (
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          )}
      </div>
    )
  }
);

const App = () => {

  return ( 
    <div className="App">
      <Router>
        <section className="Nav">
          <TopNav />
          <AuthButton />
        </section>


        <div>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/recipes" component={RecipeListing} />
            <Route path="/recipe-details" component={RecipeDetails} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
          </Switch>
        </div>
      </Router> 
    
    </div>
  );



}


export default App;
