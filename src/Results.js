import React, { useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import { useState } from "react";
import axios from "./axios";
import requests from "./requests";
import FlipMove from "react-flip-move";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
