import React from "react";
import './RightBlock.css'
import Favorites from "./Favorites";
import New from "./New";

const RightBlock = () => {
    return (
        <section className="right-blocks">
            <Favorites />
            <New />
        </section>
    )
}

export default RightBlock