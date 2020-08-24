import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import data from '../../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// style
import { Nav } from './nav.style';

function Navbar() {
  return (
    <Nav>
      <h1 className="title">
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} to={l.path}>
              {l.label}
            </Link>
          ))}
      </h1>

      <div className="searchbar">
        <label htmlFor="search"></label>
        <input type="text" placeholder="search" />
      </div>
      
      <div className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="icons">
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
    </Nav>
  );
}

export default Navbar;
