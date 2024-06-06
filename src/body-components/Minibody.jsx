import React from 'react'
import BlogSearch from './BlogSearch'
import Catog from './Catog'
import Posts from './Posts'
import Insta from './Insta'
import Postbox from './Postbox'


const Minibody = () => {
  return (
    <div className='mini-body-box'>
        <div className="mini-body-left-box">
        <BlogSearch></BlogSearch><br />
        <Catog></Catog><br />
        <Posts></Posts><br />
        <Insta></Insta>
        </div>
        <div className="mini-body-right">
        <div className="mini-body-right-box">
            <Postbox></Postbox>
            <Postbox></Postbox>
            <Postbox></Postbox>
        </div><br />
        <div className="mini-body-right-box">
            <Postbox></Postbox>
            <Postbox></Postbox>
            <Postbox></Postbox>
        </div>
        </div>
        

        
        
      
    </div>
  );
}

export default Minibody
