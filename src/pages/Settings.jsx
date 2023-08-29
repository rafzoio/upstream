import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";

const Settings = () => {
  const dispatch = useDispatch();
  const highQuality = useSelector((state) => state.highQuality);
  const adaptiveBitrate = useSelector((state) => state.adaptiveBitrate);

  useEffect(() => {
    dispatch({
      type: "UPDATE_ACTIVE_LINK",
      payload: "Settings",
    });
  }, [dispatch]);

  const handleAdaptiveBitrate = () => {
    dispatch({
      type: "TOGGLE_ADAPTIVE_BITRATE",
    });
  };

  const handleToggleQuality = () => {
    dispatch({
      type: "TOGGLE_HIGH_QUALITY",
    });
  };

  return (
    <div>
      <h1 className="text-gray-400 text-5xl pb-4">Settings</h1>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Adaptive Bitrate:</h2>
          <Switch
            onChange={handleAdaptiveBitrate}
            checked={adaptiveBitrate}
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">High quality:</h2>
          <Switch
            disabled={adaptiveBitrate}
            onChange={handleToggleQuality}
            checked={highQuality}
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
