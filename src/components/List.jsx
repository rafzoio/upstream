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
    dispatch({
      type: "PLAY",
    });
  };

  return (
    <div>
      <table className="w-fit text-left">
        <thead className="text-bold text-xl ">
          <tr>
            <th className="pl-2">Title</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
