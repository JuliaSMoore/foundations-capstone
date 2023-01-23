import React from "react";
import './LeftBlock.css'
import Last from "./Last";
import Award from "./Award";
import Recommendations from "./Recommendations";
import Popular from "./Popular";

const LeftBlock = () => {
    return (
        <section className="left-blocks">
            <Last />
            <div className="award-rec">
            <Award />
            <Recommendations />
            </div>
            <Popular />
        </section>
    )
}

export default LeftBlock