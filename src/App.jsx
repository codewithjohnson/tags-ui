import "./App.css";
import React from "react";
import { useState } from "react";

const intialData = [
  { tag: "love", id: 0 },
  { tag: "joy", id: 1 },
  { tag: "peace", id: 2 },
  { tag: "hope", id: 4 },
  { tag: "fun", id: 5 },
  { tag: "excellence", id: 6 },
];
let nextID = 7;

const App = () => {
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState(intialData);
  const addTag = () => {
    if (tags.length < 12) {
      // setTags((tags) => [...tags, newTag]);
      setTags([...tags, { tag: newTag, id: nextID++ }]);
      setNewTag("");
    }
  };

  const HandleTag = (e) => {
    if (e.key === " " || e.key === "Enter") {
      addTag();
    }
  };
  const deleteTag = (id) => {
    setTags([...tags].filter((tag) => tag.id !== id));
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <h2>Tags</h2>
          <span class="material-symbols-outlined">help</span>
        </div>

        <div className="input_container">
          <div className="input">
            <span class="material-symbols-outlined">loyalty</span>
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
                  <span class="material-symbols-outlined">close</span>
                </span>
              </li>
            ))}
          </div>
        </div>

        <div className="footer">
          <p className="signature">designed by muyiwa johnson</p>
        </div>
      </div>
    </div>
  );
};

export default App;
