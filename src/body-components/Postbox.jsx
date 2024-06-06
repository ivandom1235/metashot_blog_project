import React, { useState } from 'react';
import image7 from './photo3.jpg';
import { IoEyeSharp } from "react-icons/io5";

const Postbox = () => {
  const [viewCount, setViewCount] = useState(0);

  const handleViewClick = () => {
    setViewCount(viewCount + 1);
  };

  return (
    <div className='post-box'>
      <img src={image7} alt="photo" />
      <div className="info">
        <span className="date">foos travel-date</span><br />
        <span className="post-box-heading">lorem ipsum svsgudvisudvsfvfsv</span><br />
        <span className="post-para">jbvkj dfhiu hnoidfghvxjv hdkfhgdfjghdjfhdfjgh dfljghdvljfghldfjhg ldfjkgh ldfkjghldfjk hglfjkdvhldfkjgh ldfkjgh lhj</span><br />
        <center><button className="view-btn" onClick={handleViewClick}><a href="#">view more</a></button></center>
        <span className="view-count"><IoEyeSharp /> {viewCount}</span>
      </div>
    </div>
  );
};

export default Postbox;