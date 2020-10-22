import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import data from '../../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from '../Hamburger/hamburger';
// style
import { Nav } from './nav.style';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink as RouterNavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
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
          {!isAuthenticated && (
            <li className='button' onClick={() => loginWithRedirect()}>
              Login
            </li>
          )}
          <li to='#' className='button' onClick={() => logoutWithRedirect()}>
            Logout
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
};

export default Navbar;
