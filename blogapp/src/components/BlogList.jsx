import React from 'react'
import BlogData from './BlogData'
const BlogList = () => {
  return (
    <ul>{BlogData.map((val)=><li>{val.title}</li>)}</ul>
    
  )
}

export default BlogList