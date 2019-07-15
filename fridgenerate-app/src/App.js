import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter }  from 'react-router-dom';
import Landing from './LandingPage';

import TopNav from './TopNav';
import RecipeListing from './RecipesListing';
import RecipeDetails from './RecipeDetails';

import SignupForm from './SignupForm';
import LoginForm from './LoginForm';


const App = () => {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false)
  const [email, setEmail] = useState('')
  const [first_name, setfirst_name] = useState('')

  useEffect(()=> {
    if (loggedIn) {
      fetch('http://localhost:8000/current/user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(res => res.json())
      .then(json => {
        setEmail(json.email)
      });
    }
  }, [])

  const handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      setLoggedIn(true)
      setEmail(json.user_email)
      // history.push("/landing")
    });
  };

  const handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      setLoggedIn(true)
      setEmail(json.user_email) // json.email ?
    });
  };

  const handle_logout = (changeRoute) => {
    localStorage.removeItem('token');
    setLoggedIn(false)
    setEmail("");
    changeRoute();
  };

  const AuthButton = ({ loggedIn}) = withRouter(
    ({ history }) => {
      loggedIn ? (
        <ul>
          <li onClick={() => {
            handle_logout(() => history.push("/"));
          }}>
            <a href="#">
              Logout
            </a>
          </li> 
        </ul>
      ) : (
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      )
    }
  );


  return ( 
    <div className="App">
      <Router>
        <section className="Nav">
          <div className="Top-nav" >
            <h1>Fridgenerate</h1> 
          </div> 
          <div className="user_authentication">
            <AuthButton />
          </div>
        </section>


        <div>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/recipes" component={RecipeListing} />
            <Route path="/recipe-details" component={RecipeDetails} />
            {/* <Route path="/login" component={LoginForm} /> */}
            <Route path="/login"
                  render={(props) => <LoginForm {...props} handle_login={handle_login} />} />
            {/* <Route path="/signup" component={SignupForm} /> */}
            <Route path="/signup"
                  render={(props) => <SignupForm {...props} handle_signup={handle_signup} />} />
          </Switch>
        </div>
      </Router> 
    
    </div>
  );


}


export default App;
