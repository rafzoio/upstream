import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { ReactComponent as LogoIcon } from "../resources/icons/waves.svg";

const Header = () => {
  const dispatch = useDispatch();

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
    </div>
  );
};

export default Header;
