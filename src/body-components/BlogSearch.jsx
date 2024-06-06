import React from 'react'
import { FaSearch } from "react-icons/fa";
const BlogSearch = () => {
  return (
    <div className='blogsearch'>
      <input type="text" placeholder='Search..'/>
      <span className="searchicon"><FaSearch /></span>
    </div>
  );
}

export default BlogSearch
