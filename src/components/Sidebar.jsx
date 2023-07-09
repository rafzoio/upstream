import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-6 text-2xl">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/library">
          <h2>Library</h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
