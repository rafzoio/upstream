import { configureStore } from "@reduxjs/toolkit";

const initialSongState = {};

const songReducer = (state = initialSongState, action) => {
  switch (action.type) {
    case "UPDATE_SONG":
      return action.payload;
    default:
      return state;
  }
};

const initialPlaylistState = {
  playlist: [],
  playlistLength: 1,
  currentIndex: 0,
};

const playlistReducer = (state = initialPlaylistState, action) => {
  switch (action.type) {
    case "UPDATE_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
        playlistLength: action.payload.length,
      };
    case "NEXT_SONG":
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.playlistLength,
      };
    case "PREV_SONG":
      let prevIndex = state.currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = state.playlistLength - 1;
      }
      return {
        ...state,
        currentIndex: prevIndex,
      };
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

const initialHighQuality = true;

const highQualityReducer = (state = initialHighQuality, action) => {
  switch (action.type) {
    case "TOGGLE_HIGH_QUALITY":
      return !state;
    case "SET_HIGH_QUALITY":
      return true;
    case "SET_LOW_QUALITY":
      return false;
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    song: songReducer,
    isPlaying: isPlayingReducer,
    activeLink: activeLinkReducer,
    playlist: playlistReducer,
    highQuality: highQualityReducer,
  },
});

export default store;
