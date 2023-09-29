import React from 'react'

const BlogPost = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <h2>{props.author}</h2>
    </div>

  )
}

export default BlogPost