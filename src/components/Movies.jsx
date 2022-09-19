import axios from "axios";
import React, { useContext, useState } from "react";
import { Fragment } from "react";
import { useEffect } from "react";

import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { Container } from "./Navbar";
import noImg from "./NoImage.jpg";
import "../styles/Video.css";
import TrailerMovies from "../Trailers/TrailerMovies";
import "../responsive/VideoRes.css"

const Movies = () => {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;

  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [movieTitle, setMovieTitle] = useState("");

  const show = input ? "search" : "discover";

  const Api = `https://api.themoviedb.org/3/${show}/movie`;
  const Images = "https://image.tmdb.org/t/p/w500";

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "487be97b67b3685b6a1fc351c3469dd4",
        query: input,
      },
    });
    const results = data.data.results;
    setMoviesData(results);
  };

  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    }, 100);
  }, [input]);

  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title);
    setTrailer(!trailer);
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((movie) => (
            <Fragment>
              <div id={trailer ? "container" : "NoContainer"}>
                <AiFillPlayCircle
                  color="#fff"
                  fontSize={40}
                  id={trailer ? "playIcon" : "hide"}
                  onClick={() => MoviesTitle(movie)}
                />
                <img
                  src={
                    movie.poster_path ? `${Images}${movie.poster_path}` : noImg
                  }
                  alt=""
                  onClick={() => MoviesTitle(movie)}
                />
                <h3
                  id={movie.title.length > 28 ? "smaller-Text" : ""}
                  className={toggle ? "mainColor" : "secondaryColor"}
                >
                  {movie.title}
                </h3>
              </div>
            </Fragment>
          ))}
          {trailer ? (
            console.log
          ) : (
            <TrailerMovies moviesTitle={movieTitle} toggle={toggle} />
          )}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={55}
            cursor={"pointer"}
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Movies;
