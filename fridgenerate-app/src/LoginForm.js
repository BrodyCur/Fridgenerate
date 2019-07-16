import React from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from "react-router";


class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };


  handle_login = (e, data) => {
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
      // localStorage.setItem('user', json.user.username);
      this.props.history.push("/")
    });
  };


  render() {
    return ( 
      <form onSubmit = {e => this.handle_login(e, this.state)}>
        <label htmlFor="username">Username</label> 
        <input type = "username"
        name = "username"
        value = {this.state.username}
        onChange = {this.handle_change}
      /> 

        <br/>
        <label htmlFor="password">Password</label> 
        <input type="password"
        name = "password"
        value = {this.state.password}
        onChange = {this.handle_change}
        /> 

        <br/>
      <input type="submit" />
      </form>
    );
  }
}

export default LoginForm;
