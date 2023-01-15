import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SerchImages from "./api";
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SerchImages(term);
    setImages(result);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
};

export default App;
