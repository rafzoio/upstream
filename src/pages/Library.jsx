import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import List from "../components/List";
import Spinner from "../components/Spinner";

const Library = () => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchAllSongs = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_FETCH_SONGS_API}`
      );
      setSongs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllSongs();
    dispatch({
      type: "UPDATE_ACTIVE_LINK",
      payload: "Library",
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PLAYLIST",
      payload: songs,
    });
  }, [dispatch, songs]);

  return (
    <div className="flex flex-col gap-3">
      {isLoading ? <Spinner /> : <List data={songs} />}
    </div>
  );
};

export default Library;
