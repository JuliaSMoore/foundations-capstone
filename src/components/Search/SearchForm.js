import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./SearchForm";
import axios from "axios";

const SearchForm = ({ updateBookList }) => {
  const [searchBook, setSearchBook] = useState("");
  const [fantasyTag, setFantasyTag] = useState(false);
  const [siFiTag, setSiFiTag] = useState(false);
  const [romanceTag, setRomanceTag] = useState(false);

  useEffect(() => {
    console.log("hey");
    axios.get("http://localhost:4000/api/books").then((res) => {
      console.log(res.data);
      updateBookList(res.data);
    });
  }, []);

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const delaySearch = setTimeout(() => {
      axios
        .get(
          `http://localhost:4000/api/books?searchBook=${searchBook}&fantasyTag=${fantasyTag}&siFiTag=${siFiTag}&romanceTag=${romanceTag}`
        )
        .then((res) => {
          updateBookList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchBook, fantasyTag, siFiTag, romanceTag]);

  const onSearchTermChange = (event) => {
    setSearchBook(event.target.value);
  };

  const onFantasyTagChange = (event) => {
    setFantasyTag(event.target.checked);
  };

  const onSiFiTagChange = (event) => {
    setSiFiTag(event.target.checked);
  };

  const onRomanceTagChange = (event) => {
    setRomanceTag(event.target.checked);
  };

  return (
    <div>
      <h1>Search</h1>
      <div>
        <label>Title</label>
        <br />
        <input type="text" value={searchBook} onChange={onSearchTermChange} />
      </div>
      <div>
        <label>Tags</label>
        <br />
        <input
          type="checkbox"
          className="tags"
          id="fantasy"
          value="Fantasy"
          onChange={onFantasyTagChange}
        />
        <label htmlFor="fantasy">Fantasy</label>
        <br />
        <input
          type="checkbox"
          className="tags"
          id="si-fi"
          value="Si-Fi"
          onChange={onSiFiTagChange}
        />
        <label htmlFor="si-fi">Si-Fi</label>
        <br />
        <input
          type="checkbox"
          className="tags"
          id="romance"
          value="Romance"
          onChange={onRomanceTagChange}
        />
        <label htmlFor="romance">Romance</label>
        <br />
      </div>
    </div>
  );
};

export default SearchForm;
