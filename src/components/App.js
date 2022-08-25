import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Maps, Homepage } from "./index";
import "../style/App.css";
import { getAllMaps } from "../axios-services";

const App = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const fetchAllMaps = async () => {
      try {
        const maps = await getAllMaps();
        console.log("This is the data", maps);
        setMaps(maps);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllMaps();
  }, []);
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/maps"
            element={<Maps maps={maps} setMaps={setMaps} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
