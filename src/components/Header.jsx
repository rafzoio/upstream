import React from "react";
import { ReactComponent as LogoIcon } from "../resources/icons/waves.svg";

const Header = () => {
  return (
    <div className="flex px-6 py-3">
      <LogoIcon className="fill-blue-300 rotate-180 scale-95" />
      <h1 className="font-karla text-5xl text-gray-300">UPSTREAM</h1>
    </div>
  );
};

export default Header;
