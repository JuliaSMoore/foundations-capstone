import React from "react";
import './Last.css'
import HeadContainer from "../UI/HeadContainer";

const Last = () => {
    return (
        <div className="last">
        <HeadContainer>
            <h1>Last</h1>
            <a className="see-all" href="#">See All</a>
        </HeadContainer>
        <div>
            Content
        </div>
        </div>
    )
}

export default Last