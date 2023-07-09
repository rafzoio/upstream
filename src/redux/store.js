import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  song: {
    id: 1,
    title: "Dreamy",
    src: process.env.PUBLIC_URL + "/audio/dreamy.mp3",
  },
  isPlaying: false,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_PAUSE":
      return { ...state, isPlaying: !state.isPlaying };
    case "UPDATE_SONG":
      return { ...state, song: action.payload, isPlaying: true };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    song: songReducer,
  },
});

export default store;
