import "./App.css";
import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

const intialData = [
  { tag: "love", id: nanoid() },
  { tag: "joy", id: nanoid() },
  { tag: "peace", id: nanoid() },
  { tag: "hope", id: nanoid() },
  { tag: "fun", id: nanoid() },
  { tag: "excellence", id: nanoid() },
];

const App = () => {
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState(intialData);

  // handle tag
  const HandleTag = (e) => {
    if (e.key === " " || e.key === "Enter") {
      addTag();
    }
  };

  // add tag
  const addTag = () => {
    if (!newTag) return;
    const newTagObj = { tag: newTag, id: nanoid() };

    if (tags.length < 12) {
      setTags([...tags, newTagObj]);
      setNewTag("");
    }
  };

  // delete tag
  const deleteTag = (id) => {
    setTags([...tags].filter((tag) => tag.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Tags</h2>
        <span className="material-symbols-outlined">help</span>
      </div>

      <div className="input_container">
        <div className="input">
          <span className="material-symbols-outlined">loyalty</span>
          <input
            type="text"
            placeholder="enter a new Tag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyUp={HandleTag}
          />
        </div>
      </div>

      <hr />

      <div className="result_container">
        <div className="tagList">
          {tags.map((tag) => (
            <li key={tag.id} className="tag">
              <p>{tag.tag}</p>
              <span
                className="delete"
                onClick={() => {
                  deleteTag(tag.id);
                }}
              >
                <span className="material-symbols-outlined">close</span>
              </span>
            </li>
          ))}
        </div>
      </div>

      <div className="footer">
        <p className="signature">designed by muyiwa johnson</p>
      </div>
    </div>
  );
};

export default App;
