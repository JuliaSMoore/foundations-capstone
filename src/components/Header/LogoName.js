import React from "react"
import './LogoName.css'
import {Link} from "react-router-dom"

const LogoName = () => {
    return (
        <div className="logo-name">
            <Link to="/"><div><img className="logo" alt="" src="images/logo.png" /></div>
            <div>Reader</div></Link>

        </div>

    )
}

export default LogoName