import React from "react";
import './Popular.css'
import HeadContainer from "../UI/HeadContainer";

const Popular = () => {
    return (
        <div className="popular">
            <HeadContainer>
                <h1>Popular</h1>
                <a className="see-all" href="#">See All</a>
            </HeadContainer>
            <div>
                Content
            </div>
            
        </div>
    )
}

export default Popular