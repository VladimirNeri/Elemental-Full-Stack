import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../../data/blogposts/08062020';
import { Pagstyl } from './blog.style';
import dayjs from 'dayjs';
import Disqus from '../Disqus/disqus';

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
          />
          <h3>"Ut enim consequatur?"</h3>

          <p className='description'>{post.desc}</p>
          <img
            src={post.image.image2}
            alt={post.title}
            className='fall-image'
            height='725'
            width='550'
          />
          <img
            src={post.image.image3}
            alt={post.title}
            className='fall-image'
            height='725'
            width='550'
          />
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
      <div className='disqus'>
        <Disqus />
      </div>
    </Pagstyl>
  );
};

export default Summer;
