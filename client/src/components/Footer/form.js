import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super();
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='subscribe'>
        <h3 className='title'>Subscribe to the Newsletter</h3>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            className='firstName'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='First Name'
          />

          <input
            className='lastName'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Last Name'
          />

         
          <input
            className='email'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Email'
          />

          <input type='submit' value='Submit' className='submit' />
        </form>
      </div>
    );
  }
}

export default Form;
