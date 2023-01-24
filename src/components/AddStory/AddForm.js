import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fantasyTag, setFantasyTag] = useState(false);
  const [siFiTag, setSiFiTag] = useState(false);
  const [romanceTag, setRomanceTag] = useState(false);
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate()

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
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

  const onCoverChange = (event) => {
    setCover(event.target.value);
  };

  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newStory = {
      title: title,
      description: description,
      tags: [],
      cover: cover,
      content: content,
    };

    if (fantasyTag) {
        newStory.tags.push("Fantasy")
    }

    if (siFiTag) {
        newStory.tags.push("Si-Fi")
    }

    if (romanceTag) {
        newStory.tags.push("Romance")
    }

    axios
      .post("http://localhost:4000/api/books", newStory)
      .then((res) => {
        navigate(`/read/${res.data.id}`);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <br />
        <input type="text" onChange={onTitleChange} value={title} />
      </div>
      <div>
        <label>Description</label>
        <br />
        <input
          type="textarea"
          onChange={onDescriptionChange}
          value={description}
        />
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
      <div>
        <label>Cover</label>
        <br />
        <input type="text" onChange={onCoverChange} value={cover} />
      </div>
      <div>
        <label>Content</label>
        <br />
        <input type="textarea" onChange={onContentChange} value={content} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
