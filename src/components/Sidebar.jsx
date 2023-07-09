import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-6">
        <Link to="/">
          <h2 className="text-white font-karla">Home</h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
