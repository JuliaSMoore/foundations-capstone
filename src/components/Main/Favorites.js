import React from "react";
import './Favorites.css'
import HeadContainer from "../UI/HeadContainer";

const Favorites = () => {
    return (
        <div className="favorites">
        <HeadContainer>
            <h1>Favorites</h1>
            <a className="see-all" href="#">See All</a>
        </HeadContainer>
        <div>
            Content
        </div>
        </div>
    )
}

export default Favorites