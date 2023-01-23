import React from "react";
import './Categories.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

const Categories = () => {
    return(
        <div className="categories">
            <h1>Categories</h1>
            <Carousel>
         <div>
        <img className="image" alt='' src="images/8-evpfJWPWvQEMDzl.png" />
        <h1>Fantasy</h1>
        </div>  
        <div>
         <img className="image" alt='' src="images/8-Pjpgt6JtNVZkpXw.png" />
         <h1>Mystery</h1>
         </div>  
         <div>
          <img className="image" alt='' src="images/8-4NjzVFn9S7OvIcq.png" />
          <h1>Romance</h1>
          </div> 
          </Carousel>

        </div>
    )
}

export default Categories