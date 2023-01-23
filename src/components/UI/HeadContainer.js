import React from "react";
import './HeadContainer.css'

const HeadContainer = (props) => {
    const classes = "head-container " + props.className;

  return <div className={classes}>{props.children}</div>;

}

export default HeadContainer