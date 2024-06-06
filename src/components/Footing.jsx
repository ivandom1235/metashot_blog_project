import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footing = () => {
  return (
    <div className='foot1'>
      <div className="foot1-1">
        <h2>packs.</h2><br /><br />
        <span>@ 2018 energetic themes</span>
      </div>
      <div className="foot1-2">
      <h3>About us</h3><br />
        
        <li><a href="">home</a></li><br />
            <li><a href="">portfolio</a></li><br />
            <li><a href="">blog</a></li><br />
            <li><a href="">shop</a></li><br />
            <li><a href="">elements</a></li><br />
          
        
        </div>
        <div className="foot1-3">
        <h3>Product</h3>
        <li><br />
          <a href="">home</a></li><br />
            <li><a href="">portfolio</a></li><br />
            <li><a href="">blog</a></li><br />
            <li><a href="">shop</a></li><br />
            <li><a href="">elements</a></li><br />
            </div>
            <div className="foot1-4">
         <h3>Contact us
          </h3> <br />  
          
            <li>@gmail.com</li><br />
            <li>0938-3535-235</li><br />
            
              
                <li><a href="#"><FaWhatsapp /></a>
                <a href=""><FaFacebookF /></a>
              
            <a href=""><FaXTwitter /></a></li>  
              
            
          
          </div>
      

       

    </div>
  )
}

export default Footing

