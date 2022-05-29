import React, { useState, useEffect } from "react";

import FreeSolo from "./components/SearchBar";
import Typography from "./components/Typography";
import "./App.css";

const itemsPerPage = 20;
const App = () => {
  const [searchText, setSearchText] = useState("");
  const [response, setResponse] = useState([]);

  const inputChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchHandler = () => {
    fetchRequest();
    setSearchText("");
  };

  const fetchRequest = async () => {
    const images = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${process.env.REACT_APP_API_KEY}&per_page=${itemsPerPage}`
    );
    const data = await images.json();
    const result = data.results;
    setResponse(result);
  };

  useEffect(() => {
    fetchRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Typography />
      <FreeSolo
        inputChangeHandler={inputChangeHandler}
        searchHandler={searchHandler}
        inputValue={searchText}
      />
      <div className="image-container">
        {response.map((image) => {
          return (
            <img
              alt={image.alt_description}
              src={image.urls.small}
              key={image.id}
              className="image"
            ></img>
          );
        })}
      </div>
    </>
  );
};
export default App;
