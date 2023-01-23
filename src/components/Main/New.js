import React from "react";
import './New.css'
import HeadContainer from "../UI/HeadContainer";

const New = () => {
    return (
        <div className="new">
        <HeadContainer>
            <h1>New</h1>
            <a className="see-all" href="#">See All</a>
        </HeadContainer>
        <div>
            Content
        </div>
        </div>
    )
}

export default New