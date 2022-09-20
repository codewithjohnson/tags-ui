import "./App.css";
import React from "react";
import { useState } from "react";

const intialData = [
  "love",
  "joy",
  "peace",
  "hope",
  "fun",
  "excellence",
  "patience",
  "goodness",
  "faith",
  "good",
];

const App = () => {
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState(intialData);

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
            />
          </div>
        </div>

        <div className="result_container">
          <div className="tagList">
            {tags.map((tag, index) => (
              <li key={index} className="tag">
                <p>{tag}</p>
                <span>&#128473;</span>
              </li>
            ))}
          </div>
        </div>

        <div className="footer">
          <p className = "signature">designed by muyiwa johnson</p>
        </div>
      </div>
    </div>
  );
};

export default App;
