import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PlayIcon } from "../resources/icons/play.svg";

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
      <table className="w-fit text-left">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((song) => (
            <tr key={song.id}>
              <td className=" flex flex-row items-center">
                <button onClick={() => handleSongSelect(song)}>
                  <PlayIcon className="w-6 fill-gray-500 hover:fill-gray-800" />
                </button>
                {song.title}
              </td>
              <td className="">Artist</td>
              <td className="">Album</td>
              <td className="">2023</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
