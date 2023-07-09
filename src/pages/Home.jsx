import React from "react";
import List from "../components/List";

const songs = [
  {
    id: 1,
    title: "Dreamy",
    src: process.env.PUBLIC_URL + "/audio/dreamy.mp3",
  },
  {
    id: 2,
    title: "Guitar",
    src: process.env.PUBLIC_URL + "/audio/guitar.mp3",
  },
  {
    id: 3,
    title: "Piano",
    src: process.env.PUBLIC_URL + "/audio/piano.mp3",
  },
  {
    id: 4,
    title: "Piano2",
    src: process.env.PUBLIC_URL + "/audio/piano2.mp3",
  },
  {
    id: 5,
    title: "Voice",
    src: process.env.PUBLIC_URL + "/audio/voice.mp3",
  },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-karla">Welcome to Upstream</h1>
      <List data={songs} />
    </div>
  );
};

export default Home;
