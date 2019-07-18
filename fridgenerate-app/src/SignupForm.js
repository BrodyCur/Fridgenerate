import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
    state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: ''

    };

    handle_change = e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState(prevstate => {
        const newState = {
          ...prevstate
        };
        newState[name] = value;
        return newState;
      });
    };


  render() {
    return ( 
      <div className="form-container">
        <form className="form-box" onSubmit = { e => this.props.handle_signup(e, this.state)}>
          <h4>Sign Up</h4>
          <label className="signup-form" htmlFor="username"></label> 
          <input className="auth-input" type = "text"
            name = "username"
            placeholder="Username"
            value = {this.state.username}
            onChange = {this.handle_change}
          /> 
          <br/>
          <label className="signup-form" htmlFor="first_name"></label> 
          <input className="auth-input" type = "text"
            name = "first_name"
            placeholder="First Name"
            value = {this.state.first_name}
            onChange = {this.handle_change}
          /> 

          <br/>
          <label className="signup-form" htmlFor="last_name"></label>  
          <input className="auth-input" type = "last_name"
            name = "last_name"
            placeholder="Last Name"
            value = {this.state.last_name}
            onChange = {this.handle_change}
          /> 
  
          <br/>
          <label className="signup-form" htmlFor = "email" ></label>  
          <input className="auth-input" type = "email"
            name = "email"
            placeholder="Eamil"
            value = {this.state.email}
            onChange = {this.handle_change}
          /> 

          <br/>
          <label className="signup-form" htmlFor="password"></label> 
          <input className="auth-input" type = "password"
          name = "password"
          placeholder="Password"
          value = {this.state.password}
          onChange = {this.handle_change}
          /> 

          <br/>
          <input className="Ingredients-button" type="submit" />
        </form>
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};