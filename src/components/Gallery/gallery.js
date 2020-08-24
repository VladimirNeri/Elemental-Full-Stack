import * as React from 'react';
import Masonry from 'react-masonry-css';
import data from '../../data/posts';
import PropTypes from 'prop-types'; 

const Gallery = () => {
  // const breakpointColumnsObj = {
  //   default: 4,
  //   1100: 3,
  //   700: 2,
  //   500: 1
  // };
  return (
    <Masonry
      breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map((post) => (
        <div className="image" key={post.id}>
          <a href={`#${post.path}`}>
            <img src={post.image} alt={post.title} className="image" />
          </a>
        </div>
      ))}
    </Masonry>
  );
};

Gallery.propTypes ={
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string, 
    title: PropTypes.string, 
    image: PropTypes.string, 
    path: PropTypes.string, 
    category: PropTypes.string 
  }))
}

Gallery.defaultProps = {
  data: [],
}

export default Gallery;
