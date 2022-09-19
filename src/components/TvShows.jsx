import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Fragment } from "react";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import noImg from "./NoImage.jpg";
import { Container } from "./Navbar";
import "../styles/Video.css";
import TrailerTvShow from "../Trailers/TrailerTvShow";

const TvShows = () => {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;

  const [showData, setShowData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [title, setTitle] = useState("");

  const show = input ? "search" : "discover";

  const Api = `https://api.themoviedb.org/3/${show}/tv`;
  const Images = "https://image.tmdb.org/t/p/w500";

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "487be97b67b3685b6a1fc351c3469dd4",
        query: input,
      },
    });
    const results = data.data.results;
    setShowData(results);
  };

  useEffect(() => {
    setTimeout(() => {
      TvShows();
    },100)
  }, [input]);

  const TvShowTitle = (shows) => {
    setTitle(shows.name);
    setTrailer(!trailer);
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {showData.map((shows) => (
            <Fragment key={shows.id}>
              <div id={trailer ? "container" : "NoContainer"}>
                <AiFillPlayCircle
                  color="#fff"
                  fontSize={40}
                  id={trailer ? "playIcon" : "hide"}
                  onClick={() => TvShowTitle(shows)}
                />
                <img
                  src={
                    shows.poster_path ? `${Images}${shows.poster_path}` : noImg
                  }
                  alt=""
                  onClick={() => TvShowTitle(shows)}
                />
                <h3
                  id={shows.name.length > 28 ? "smaller-Text" : ""}
                  className={toggle ? "mainColor" : "secondaryColor"}
                  onClick={() => TvShowTitle(shows)}
                >
                  {shows.name}
                </h3>
              </div>
            </Fragment>
          ))}
          {trailer ? console.log() : <TrailerTvShow title={title} toggle={toggle}/>}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={55}
            cursor={'pointer'}
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TvShows;
