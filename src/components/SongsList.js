import React, { useState, useEffect } from "react";
import uuid from "uuid/dist/v1";
import NewSongForm from "./NewSong";

const SongsList = () => {
  const [songs, setSongs] = useState([
    { title: "Where are you now..", id: 1 },
    { title: "Is this the time..", id: 2 },
    { title: "Olala Olalala..", id: 3 },
    { title: "Dirty Dancer..", id: 4 }
  ]);

  const [age, setAge] = useState(18);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("when ever state data changes it will fire.", songs);
  }, [songs]);

  useEffect(() => {
    console.log("when ever age data changes it will fire.", age);
  }, [age]);

  return (
    <div>
      <ul>
        {songs.map(songs => {
          return <li key={songs.id}>{songs.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong}></NewSongForm>
      <button onClick={() => setAge(age + 1)}>Add +1 to age : {age}</button>
    </div>
  );
};

export default SongsList;
