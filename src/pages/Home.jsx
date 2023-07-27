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

  return <div></div>;
};

export default Home;
