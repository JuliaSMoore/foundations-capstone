import React from "react";
import './LinkBlock.css'

const LinkBlock = () => {
    return(
    <footer>
         <nav className="footer-nav">
            <a href="#">Rules</a> 
            <a href="#">FAQ</a>
            <a href="#">Agreement</a>
            <a href="#">Support</a>
            <a href="#">Style</a>
            <a href="#">Language</a>
        </nav>
        <div className="copyrights">The copyrights and disclaimer go here</div>
    </footer>
    )
}

export default LinkBlock