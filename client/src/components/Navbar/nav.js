import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import data from '../../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from '../Hamburger/hamburger';
import LoginModal from '../Modal/modal';
// style
import { Nav } from './nav.style';

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(true);

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
          {modalShow ? (
            <li>
              <li className='login-btn'>
                Logout
                <LoginModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </li>
            </li>
          ) : (
            <li className='logout-btn' onClick={() => setModalShow(!modalShow)}>
              Login
            </li>
          )}

          {/* <li className='login-btn' onClick={() => setModalShow(true)}>
            Login
          </li>
          <LoginModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          /> */}
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
