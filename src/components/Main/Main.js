import React from "react";
import './Main.css'
import Categories from './Categories'
import LeftBlock from "./LeftBlock";
import RightBlock from './RightBlock'

const Main = () => {
    return (
    <div className="wrapper">
        <Categories />
        <div className="main-container">
        <LeftBlock />
        <RightBlock />
        </div>

    </div>
    )
}

export default Main