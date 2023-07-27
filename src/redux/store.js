import { configureStore } from "@reduxjs/toolkit";

const initialSongState = {
  id: 1,
  title: "Dreamy",
  path: "dreamy",
  url: "",
};

const songReducer = (state = initialSongState, action) => {
  switch (action.type) {
    case "UPDATE_SONG":
      return action.payload;
    default:
      return state;
  }
};

const initialIsPlayingState = false;

const isPlayingReducer = (state = initialIsPlayingState, action) => {
  switch (action.type) {
    case "PLAY_PAUSE":
      return !state;
    case "PLAY":
      return true;
    default:
      return state;
  }
};

const initialActiveLinkState = "Home";

const activeLinkReducer = (state = initialActiveLinkState, action) => {
  switch (action.type) {
    case "UPDATE_ACTIVE_LINK":
      return action.payload;
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    song: songReducer,
    isPlaying: isPlayingReducer,
    activeLink: activeLinkReducer,
  },
});

export default store;
