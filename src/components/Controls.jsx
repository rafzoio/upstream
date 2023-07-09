import { React, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CirclePlayIcon } from "../resources/icons/circlePlay.svg";
import { ReactComponent as CircleStopIcon } from "../resources/icons/circleStop.svg";
import { ReactComponent as SkipNextIcon } from "../resources/icons/skip_next.svg";
import { ReactComponent as SkipPrevIcon } from "../resources/icons/skip_prev.svg";

const Controls = () => {
  const dispatch = useDispatch();
  const songState = useSelector((state) => state.song);
  const audioRef = useRef();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (songState.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      // Event listener for loaded metadata
      const onLoadedMetadata = () => {
        setDuration(Math.round(audio.duration));
      };

      // Event listener for time update
      const onTimeUpdate = () => {
        setProgress(Math.round(audio.currentTime));
      };

      // Add event listeners
      audio.addEventListener("loadedmetadata", onLoadedMetadata);
      audio.addEventListener("timeupdate", onTimeUpdate);

      // Remove event listeners on cleanup
      return () => {
        audio.removeEventListener("loadedmetadata", onLoadedMetadata);
        audio.removeEventListener("timeupdate", onTimeUpdate);
      };
    }
  }, [songState.isPlaying, songState.song]);

  useEffect(() => {
    if (audioRef.current) {
      if (songState.isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [songState.isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songState.song.src;
      audioRef.current.play();
    }
  }, [songState.song.src]);

  const playingButton = () => {
    dispatch({ type: "PLAY_PAUSE" });
    console.log(songState.song.src);
  };

  return (
    <div className="flex flex-col items-center">
      <audio ref={audioRef} />
      <div className="w-full bg-slate-900 h-2">
        <div
          className="h-full bg-slate-700"
          style={{ width: `${(progress / duration) * 100}%` }}
        ></div>
      </div>
      <div id="buttons" className="flex gap-4 py-3">
        <SkipPrevIcon className="fill-white hover:fill-gray-500" />
        {songState.isPlaying ? (
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
  );
};

export default Controls;
