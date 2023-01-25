import React from "react";
import './Categories.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

const Categories = () => {
    return(
        <div className="categories">
            <Carousel>
         <div>
        <img className="image" alt='' src="images/fantasy.jpg" />
        <h1>Fantasy</h1>
        </div>  
        <div>
         <img className="image" alt='' src="images/si-fi.jpg" />
         <h1>Si-Fi</h1>
         </div>  
         <div>
          <img className="image" alt='' src="images/romance.jpg" />
          <h1>Romance</h1>
          </div> 
          </Carousel>

        </div>
    )
}

export default Categories