import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
      <nav className="navigation-links">
        <a href="#">News</a>
        <Link to="/search">
          Search
        </Link>
        <Link to="/add">
          Add a Story
        </Link>
        <a href="#">Drafts</a>
        <a href="#">Collections</a>
      </nav>
  );
};

export default Navigation;
