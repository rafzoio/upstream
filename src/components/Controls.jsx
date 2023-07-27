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
  const isPlaying = useSelector((state) => state.isPlaying);
  const audioRef = useRef();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audio = audioRef.current;

  const updateSongSources = async () => {
    try {
      const response = await axios.get(
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
      audio.src = songState.url;
    }
  }, [songState, audio]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
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
  }, [isPlaying, songState, audio]);

  const playingButton = () => {
    dispatch({ type: "PLAY_PAUSE" });
  };

  return (
    <div className="flex flex-row px-10 items-center gap-6">
      <h3 className="font-extrabold">{songState.title}</h3>
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
          <SkipPrevIcon className="fill-white hover:fill-gray-500" />
          {isPlaying ? (
            <CircleStopIcon
              onClick={playingButton}
              className="fill-white hover:fill-gray-500"
            />
          ) : (
            <CirclePlayIcon
              onClick={playingButton}
              className="fill-white hover:fill-gray-500"
            />
          )}
          <SkipNextIcon className="fill-white hover:fill-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Controls;
