import React, { Component } from 'react';
import API from '../../utils/API'; 
import { FormStyl } from './form.style';
class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    API.createSub({
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
    }); 
  
  }

  render() {
    return (
      <FormStyl>
      <div className='subscribe'>
        <h3 className='title'>Subscribe to the Newsletter</h3>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            className='firstName'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='First Name'
          />

          <input
            className='lastName'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='Last Name'
          />

          <input
            className='email'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='Email'
          />

          <input type='submit' value='Submit' className='submit' />
        </form>
      </div>
      </FormStyl>
    );
  }
}

export default Form;
