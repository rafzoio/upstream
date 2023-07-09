import { React, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  };

  return (
    <div>
      <div className="flex flex-col gap-2 p-6 text-2xl">
        <Link
          to="/"
          className={activeLink === "Home" ? " text-white" : "text-gray-400"}
          onClick={handleNavLinkClick}
        >
          <h2>Home</h2>
        </Link>
        <Link
          to="/library"
          className={activeLink === "Library" ? " text-white" : "text-gray-400"}
          onClick={handleNavLinkClick}
        >
          <h2>Library</h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
