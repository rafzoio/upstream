import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Upload = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();

  useEffect(() => {
    dispatch({
      type: "UPDATE_ACTIVE_LINK",
      payload: "Upload",
    });
  }, [dispatch]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
};

export default Upload;
