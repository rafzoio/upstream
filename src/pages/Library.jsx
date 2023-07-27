import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import List from "../components/List";

const Library = () => {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();

  const fetchAllSongs = async () => {
    try {
      const response = await axios.get(
        "https://cjaaog8vtk.execute-api.eu-west-2.amazonaws.com/default/GetAllSongs"
      );
      setSongs(response.data);
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

  return (
    <div>
      <List data={songs} />
    </div>
  );
};

export default Library;
