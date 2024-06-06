import React from 'react'
import image1 from './photo2.jpg'
import image2 from './photo1-insta.jpg'
import image3 from './photo3.jpg'
import image4 from './photo4.jpg'
import image5 from './photo5.jpg'

const Insta = () => {
  return (
    <div className='Instagram-photos'>
        <h3>instagram</h3>
    <li className="list1">
    <img src={image1} alt=":(" />
    <img src={image2} alt=":(" />
    <img src={image3} alt=":(" /></li>
    <li className="list2">
        <img src={image4} alt=":(" />
        <img src={image5} alt=";(" />
        <img src={image1} alt=":(" />
    </li>


      
    </div>
  )
}

export default Insta
