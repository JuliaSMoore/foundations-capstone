import React from "react";
import Header from "../Header/Header";
import LinkBlock from "../Footer/LinkBlock";
import SearchForm from "../Search/SearchForm";
import List from "../Search/List";

const Search = () => {
    return (
        <div>
            <Header />
        <div className="wrapper">
       <SearchForm />
       <List />
        </div>
        <LinkBlock />
        </div>
    )
}

export default Search