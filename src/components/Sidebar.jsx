import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.activeLink);
  const bitrate = useSelector((state) => state.bitrate);

  const handleChange = () => {
    dispatch({
      type: "UPDATE_BITRATE",
    });
  }

    return (
    <div>
      <div className="flex flex-col just gap-3 p-6 text-2xl">
          <Link
            to="/"
            className={activeLink === "Home" ? " text-white" : "text-gray-400"}
          >
            <h2>Home</h2>
          </Link>
          <Link
            to="/library"
            className={activeLink === "Library" ? " text-white" : "text-gray-400"}
          >
            <h2>Library</h2>
          </Link>
          <Link
            to="/upload"
            className={activeLink === "Upload" ? " text-white" : "text-gray-400"}
          >
            <h2>Upload</h2>
          </Link>
        </div>
      </div>
  );
};
export default Sidebar;
