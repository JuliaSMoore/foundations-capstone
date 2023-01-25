import React, { useState } from "react";
import Header from "../Header/Header";
import LinkBlock from "../Footer/LinkBlock";
import SearchForm from "../Search/SearchForm";
import List from "../Search/List";

const Search = () => {
    const [bookList, setBookList] = useState(null)

    return (
        <div>
            <Header />
            <div className="wrapper search-wrapper">
                <SearchForm
                    updateBookList={setBookList}
                />
                <List
                    bookList={bookList}
                />
            </div>
            <LinkBlock />
        </div>
    )
}

export default Search