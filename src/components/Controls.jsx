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
    <div className="flex flex-row px-10 items-center gap-6">
      <h3 className="font-extrabold">{songState.song.title}</h3>
      <audio ref={audioRef} />
      <div className="w-full bg-slate-900 h-2">
        <div
          className="h-full bg-slate-700"
          style={{ width: `${(progress / duration) * 100}%` }}
        ></div>
      </div>
      <div className="flex flex-row items-center gap-2 w-10 justify-stretch">
        <p>{progress}</p>
        <p>{duration}</p>
      </div>
      <div className="flex float-left justify-between items-center">
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
    </div>
  );
};

export default Controls;
