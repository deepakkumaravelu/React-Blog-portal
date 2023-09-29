import React from 'react';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostAuthor from './PostAuthor';
import BlogData from './BlogData'; 
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogPost = () => {
  const currentDate = new Date();
  return (
    <div>
      {BlogData.map((val, index) => ( 
        <div key={index}>
          <PostTitle title={val.title} />
          <p>{formatDate(currentDate)}</p>
          <PostContent content={val.content} />
          <PostAuthor author={val.author} />
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
