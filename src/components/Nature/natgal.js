import * as React from 'react';
import Masonry from 'react-masonry-css';

import data from '../../data/posts';
// import Natcell from './natcell';

const Natgal = () => {
  let natData = data.filter((data) => data.category === 'nature');

  return (
    <Masonry
      breakpointCols={{ default: 3, 800: 2 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {natData.map((post) => (
        <div className="image" key={post.id}>
          <a href={`#${post.path}`}>
            <img src={post.image} alt={post.title} className="image" />
          </a>
        </div>
      ))}
    </Masonry>
  );
};

export default Natgal;
