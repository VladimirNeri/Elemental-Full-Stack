import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { Link } from 'react-router-dom';

import slide01 from '../../data/images/1.jpg';
import slide02 from '../../data/images/14.jpg';
import slide03 from '../../data/images/18.jpg';
import slide04 from '../../data/images/22.jpg';

import { HeroStyl } from './hero.style';

const Hero = () => {
  return (
    <HeroStyl>
      <Carousel interval={8000} bsPrefix='carousel'>
        <Carousel.Item bsPrefix='carousel-item'>
          <Link to='/posts/fall'>
          <img className='d-block w-100' src={slide01} alt='First slide' />
          </Link>
          <Carousel.Caption bsPrefix='carousel-caption'>
            <h3>Fall</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item bsPrefix='carousel-item'>
          <Link to='/posts/winter'>
          <img className='d-block w-100' src={slide02} alt='Third slide'/>
          </Link>
          <Carousel.Caption bsPrefix='carousel-caption'>
            <h3>Winter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item bsPrefix='carousel-item'>
        <Link to='/posts/spring'>
          <img className='d-block w-100' src={slide03} alt='Third slide' />
        </Link>
          <Carousel.Caption bsPrefix='carousel-caption'>
            <h3>Spring</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item bsPrefix='carousel-item'>
        <Link to='/posts/summer'>
          <img className='d-block w-100' src={slide04} alt='Fourth Slide' />
        </Link>
          <Carousel.Caption bsPrefix='carousel-caption'>
            <h3>Summer</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </HeroStyl>
  );
};

export default Hero;
