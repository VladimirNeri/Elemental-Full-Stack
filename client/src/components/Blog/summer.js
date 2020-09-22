import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../../data/blogposts/08062020';
import { Pagstyl } from './blog.style';
import dayjs from 'dayjs';

const Summer = () => {
  let pagData = data.filter((data) => data.title === 'Summer');
  return (
    <Pagstyl>
      {pagData.map((post) => (
        <header key={post.id}>
          <div>
            <Helmet>
              <title>Elemental | Summer</title>
              <meta name='description' content='Posts' />
            </Helmet>
          </div>
          <h1>{post.title}</h1>
          <time className='published'>
            <i>posted on {dayjs(post.date).format('MMMM DD, YYYY')}</i>
          </time>
          <img
            src={post.image.image1}
            alt={post.title}
            className='image'
            width='1000'
          />
          <h3>"Ut enim consequatur?"</h3>
          <video
            src={post.video}
            type='video/mp4'
            className='video'
            width='750'
            height='500'
            controls
          />
        </header>
      ))}
    </Pagstyl>
  );
};

export default Summer;
