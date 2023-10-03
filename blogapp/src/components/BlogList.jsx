import React, { useState } from 'react';
import BlogData from './BlogData';
import BlogPost from './BlogPost';

const BlogList = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Event handler to update selectedPost when a blog title is clicked
  const handleTitleClick = (title) => {
    setSelectedPost(title);
  };

  return (
    <div>
      <ul>
        {BlogData.map((val) => (
          <li className='titlelist' key={val.title}>
            <button onClick={() => handleTitleClick(val.title)}>
              {val.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="blog-content">
        {selectedPost && (
          <BlogPost post={BlogData.find((post) => post.title === selectedPost)} />
        )}
      </div>
    </div>
  );
};

export default BlogList;
