import React, { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }) {
  const [formData, setFormData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit(formData);
    setFormData("");
  };

  const changeHandler = (e) => {
    setFormData(e.target.value);
  };

  return (
    <div className="search-bar">
      <label htmlFor="">Enter Search term</label>
      <form action="submit" onSubmit={submitHandler}>
        <input type="text" value={formData} onChange={changeHandler} />
        <button>Click me!</button>
      </form>
    </div>
  );
}

export default SearchBar;
