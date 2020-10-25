import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
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
      .post('/api/login', submitObject)
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
    const { from } = { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <>
        <LoginStyl>
          <div className='login-modal'>
            <form className='login' onSubmit={this.handleSubmit.bind(this)}>
              <label className='loginEmail'>Username</label>
              <input
                type='text'
                className='form-control'
                id='loginUsername'
                aria-describedby='usernameHelp'
                placeholder='Enter Username'
                onChange={this.handleUsernameChange}
                value={this.state.username}
              />
              <label className='loginInputPassword'>Password</label>
              <input
                type='password'
                className='form-control'
                id='loginInputPassword'
                placeholder='Password'
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />

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
