import React, { useState } from "react";
import './SearchForm'

const SearchForm = (props) => {

const [searchBook, setSearchBook] = useState('')

const onSearchTermChange = (event) => {
    setSearchBook(event.target.value)
}

    return (
    <div>
     <h1>Search</h1>
    <div>
        <label>Title</label><br/>
        <input type="text"
        value={searchBook}
        onChange={onSearchTermChange} />
    </div>
    <div>
        <label>Tags</label><br/>
            <input type="checkbox" className="tags" id="fantasy" value="Fantasy"/>
            <label htmlFor="fantasy">Fantasy</label><br/>
            <input type="checkbox" className="tags" id="si-fi" value="Si-Fi"/>
            <label htmlFor="si-fi">Si-Fi</label><br/>
            <input type="checkbox" className="tags" id="romance" value="Romance"/>
            <label htmlFor="romance">Romance</label><br/>

    </div>
    </div>
    )
}

export default SearchForm