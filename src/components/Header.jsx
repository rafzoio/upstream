import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import Switch from "react-switch";

import { useDispatch } from "react-redux";
import { ReactComponent as LogoIcon } from "../resources/icons/waves.svg";

const Header = () => {
  const dispatch = useDispatch();
  const bitrate = useSelector((state) => state.bitrate);

  const handleChange = () => {
    dispatch({
      type: "UPDATE_BITRATE",
    });
  }

  const handleNavLinkClick = (linkText) => {
    dispatch({
      type: "UPDATE_ACTIVE_LINK",
      payload: linkText,
    });
  };

  return (
    <div className="flex flex-row items-center justify-between pr-5">
      <Link
        to="/"
        className="flex px-6 py-3"
        onClick={() => handleNavLinkClick("Home")}
      >
        <LogoIcon className="scale-95" />
        <h1 className="font-karla text-5xl text-gray-300">UPSTREAM</h1>
      </Link>
      <div className="flex flex-row gap-3">
        <h2 className="text-xl">High quality:</h2>
      <Switch onChange={handleChange} checked={bitrate} checkedIcon={false} uncheckedIcon={false}/>
      </div>
    </div>
  );
};

export default Header;
