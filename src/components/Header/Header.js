import React from "react";
import LogoName from './LogoName'
import Navigation from './Navigation'
import Profile from './Profile'
import './Header.css'

const Header = () => {
    return (
        <header className="header-panel">
            <LogoName />
            <div className="navigation-profile">
            <Navigation />
            <Profile />
            </div>
        </header>
    )
}

export default Header