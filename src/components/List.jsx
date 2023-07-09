import React from "react";
import { useDispatch } from "react-redux";

const List = ({ data }) => {
  const dispatch = useDispatch();

  const handleSongSelect = (song) => {
    dispatch({
      type: "UPDATE_SONG",
      payload: song,
    });
  };

  return (
    <div>
      <ul>
        {data.map((song) => (
          <li key={song.id}>
            <button onClick={() => handleSongSelect(song)}>{song.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
