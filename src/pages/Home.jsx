import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "UPDATE_ACTIVE_LINK",
      payload: "Home",
    });
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-gray-400 text-5xl">Welcome to upstream</h1>
    </div>
  );
};

export default Home;
