import React from 'react';
import BlogData from './BlogData';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostAuthor from './PostAuthor';
import Quotes from './Quotes';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogPost = ({ title }) => {
  console.log('Received title:', title);

  const post = BlogData.find((val) => val.title === title);
  console.log('Matching post:', post);

  if (!post) {
    // If no matching post is found, show a default message or component
    return <div>Blog post not found.</div>;
  }

  return (
    <div>
      <h1>{Quotes[Math.floor(Math.random() * 3)]}</h1>
      <PostTitle title={post.title} />
      <p>{formatDate(post.date)}</p>
      <PostContent content={post.content} />
      <PostAuthor author={post.author} />
    </div>
  );
};

export default BlogPost;
