import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import data from '../../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from '../Hamburger/hamburger';
// style
import { Nav } from './nav.style';

class Navbar extends Component {
  constructor(props) {
    super();
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <Nav>
        <h1 className='title'>
          {routes
            .filter((l) => l.index)
            .map((l) => (
              <Link key={l.label} to={l.path}>
                {l.label}
              </Link>
            ))}
        </h1>

        <div className='links'>
          <ul>
            {routes
              .filter((l) => !l.index)
              .map((l) => (
                <li key={l.label}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            <li className='button' onClick={this.handleClick}>
              {this.state.isToggleOn ? 'LogIn' : 'LogOut'}
            </li>
          </ul>
        </div>

        <div className='icons'>
          <ul>
            {data.map((s) => (
              <li key={s.label}>
                <a href={s.link}>
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Hamburger />
      </Nav>
    );
  }
}

export default Navbar;
