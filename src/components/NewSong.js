import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Song Title: </label>
        <input
          type="text"
          value={title}
          required
          onChange={e => setTitle(e.target.value)}
        ></input>
        <input type="submit" value="add song"></input>
      </form>
    </div>
  );
};

export default NewSongForm;
