import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { LoginStyl } from './login.style';
//component for logging in, checks to see if username and password exist before letting in user

export default class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  loginUser(submitObject) {
    axios
      .post('/apis/users/login', submitObject)
      .then(
        function (data) {
          console.log(data.data);
          if (data.data.success) {
            this.props.authenticate();
            this.setState({
              redirectToReferrer: true,
            });
          } else {
            alert(data.data.message);
          }
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });

    this.setState({
      username: '',
      password: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const usernameInput = this.state.username;
    const passwordInput = this.state.password;

    const objSubmit = {
      username: usernameInput,
      password: passwordInput,
    };

    if (!objSubmit.username || !objSubmit.password) {
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    this.loginUser(objSubmit);
  }

  render() {
    return (
      <>
        <LoginStyl>
          <div className='card-body'>
            <form id='login'>
              <div className='form-group'>
                <label htmlFor='loginEmail'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='loginEmail'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  
                />
                <small id='emailHelp' className='form-text text-muted'></small>
              </div>
              <div className='form-group'>
                <label htmlFor='loginInputPassword'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='loginInputPassword'
                  placeholder='Password'
                />
              </div>

              <div className='login-buttons'>
                <Button
                  className='login'
                  variant='success'
                  size='lg'
                  onSubmit={this.handleSubmit.bind(this)}
                >
                  Log In
                </Button>
                <div className='register'>
                  <Link to={'/signup'}> Register </Link>
                </div>
              </div>
            </form>
          </div>
        </LoginStyl>
      </>
    );
  }
}
