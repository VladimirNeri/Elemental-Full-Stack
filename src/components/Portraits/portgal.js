import * as React from 'react';
import Masonry from 'react-masonry-css';
import data from '../../data/posts';

const Portgal = () => {
  let portData = data.filter((data) => data.category === 'portrait');
  const newData = portData.slice().reverse();
  return (
    <Masonry
      breakpointCols={{ default: 3, 800: 2 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {newData.map((post) => (
        <div className="image" key={post.id}>
          <a href={`#${post.path}`}>
            <img src={post.image} alt={post.title} className="image" />
          </a>
        </div>
      ))}
    </Masonry>
  );
};

export default Portgal;
