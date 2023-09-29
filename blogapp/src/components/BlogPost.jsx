import React from 'react';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostAuthor from './PostAuthor';
import BlogData from './BlogData'; 

const BlogPost = () => {
  return (
    <div>
      {BlogData.map((val, index) => ( 
        <div key={index}>
          <PostTitle title={val.title} />
          <PostContent content={val.content} />
          <PostAuthor author={val.author} />
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
