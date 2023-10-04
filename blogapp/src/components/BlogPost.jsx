import React from 'react';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostAuthor from './PostAuthor';
import BlogData from './BlogData'; 
import Quotes from './Quotes';
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
          <h1>{Quotes[Math.floor(Math.random()*3)]}</h1>
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
