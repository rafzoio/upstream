import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CirclePlayIcon } from "../resources/icons/circlePlay.svg";
import { ReactComponent as CircleStopIcon } from "../resources/icons/circleStop.svg";
import { ReactComponent as SkipNextIcon } from "../resources/icons/skip_next.svg";
import { ReactComponent as SkipPrevIcon } from "../resources/icons/skip_prev.svg";

const Controls = () => {
  const dispatch = useDispatch();
  const songState = useSelector((state) => state.song);
  const bitrate = useSelector((state) => state.bitrate);
  const isSongStatePopulated = Object.keys(songState).length !== 0;
  const isPlayingState = useSelector((state) => state.isPlaying);
  const playlistState = useSelector((state) => state.playlist);
  const audioRef = useRef();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audio = audioRef.current;

  const updateSongSources = async () => {
    try {
      await axios.get(
        "https://utt4ontk9h.execute-api.eu-west-2.amazonaws.com/default/UpdateSources"
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateSongSources();
  }, []);

  useEffect(() => {
    if (audio) {
      audio.src = bitrate ? songState.url : songState.url_compressed;
    }
  }, [songState, audio, bitrate]);

  useEffect(() => {
    if (audio) {
      if (isPlayingState) {
        audio.play();
      } else {
        audio.pause();
      }

      const onLoadedMetadata = () => {
        setDuration(Math.round(audio.duration));
      };

      const onTimeUpdate = () => {
        setProgress(Math.round(audio.currentTime));
      };

      audio.addEventListener("loadedmetadata", onLoadedMetadata);
      audio.addEventListener("timeupdate", onTimeUpdate);

      return () => {
        audio.removeEventListener("loadedmetadata", onLoadedMetadata);
        audio.removeEventListener("timeupdate", onTimeUpdate);
      };
    }
  }, [isPlayingState, songState, audio]);

  const playingButton = () => {
    dispatch({ type: "PLAY_PAUSE" });
  };

  const nextButton = () => {
    const nextSongIndex =
      (playlistState.currentIndex + 1) % playlistState.playlistLength;
    dispatch({
      type: "UPDATE_SONG",
      payload: playlistState.playlist[nextSongIndex],
    });
    dispatch({
      type: "NEXT_SONG",
    });
  };

  const prevButton = () => {
    let prevSongIndex = playlistState.currentIndex - 1;
    if (prevSongIndex < 0) {
      prevSongIndex = playlistState.playlistLength - 1; // Wrap to the end of the array
    }
    dispatch({
      type: "UPDATE_SONG",
      payload: playlistState.playlist[prevSongIndex],
    });
    dispatch({
      type: "PREV_SONG",
    });
  };

  return (
    <div className="flex flex-row px-10 items-center gap-6">
      <div className="flex flex-col w-32">
        <h3 className="font-extrabold">
          {isSongStatePopulated ? songState.title : "Song"}
        </h3>
        <h3 className="text-sm">
          {isSongStatePopulated ? songState.artist : "Artist"}
        </h3>
      </div>

      <audio ref={audioRef} src={songState.src} />
      <div className="w-full bg-slate-900 h-2">
        <div
          className="h-full bg-slate-700"
          style={{ width: `${(progress / duration) * 100}%` }}
        ></div>
      </div>
      <div className="flex flex-row items-center gap-2 w-16 justify-stretch">
        <p>
          {Math.floor(progress / 60)}:
          {(progress % 60).toString().padStart(2, "0")}
        </p>
        <p>
          {Math.floor(duration / 60)}:
          {(duration % 60).toString().padStart(2, "0")}
        </p>
      </div>
      <div className="flex float-left justify-between items-center">
        <div id="buttons" className="flex gap-4 py-3">
          <SkipPrevIcon
            onClick={isSongStatePopulated ? prevButton : undefined}
            className="fill-white hover:fill-gray-500"
          />
          {isPlayingState ? (
            <CircleStopIcon
              onClick={isSongStatePopulated ? playingButton : undefined}
              className="fill-white hover:fill-gray-500"
            />
          ) : (
            <CirclePlayIcon
              onClick={isSongStatePopulated ? playingButton : undefined}
              className="fill-white hover:fill-gray-500"
            />
          )}
          <SkipNextIcon
            onClick={isSongStatePopulated ? nextButton : undefined}
            className="fill-white hover:fill-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
