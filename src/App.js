import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ShowCards from "./components/ShowCards/ShowCards";

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [],
    search: "",
  });

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => setPersonState({ persons: res.data.data }));
  }, []);

  // const inputSearchHandler = (event) => {
  //   setPersonState({ search: event.target.value });
  //   console.log(personState.search);
  // };

  return (
    <div className="App">
      <SearchBar />
      <ShowCards persons={personState.persons} />
    </div>
  );
};

export default App;
