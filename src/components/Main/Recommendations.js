import React from "react";
import './Recommendations.css'
import HeadContainer from "../UI/HeadContainer";

const Recommendations = () => {
    return (
        <div className="recommendations">
             <HeadContainer>
             <h1>Recommendations</h1>
             <a className="see-all" href="#">See All</a>
             </HeadContainer>
             <div>
                Content
             </div>
        </div>
    )
}

export default Recommendations