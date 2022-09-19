import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import "../styles/HomeTrailer.css";

function HomeTrailer({ homeTitle, toggle }) {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");
  function handleSearch() {
    setVideo(homeTitle);
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  useEffect(() => {
    handleSearch();
  }, [videoURL]);

  return (
    <Fragment>
      <div className="Container"></div>
      <div className="playerTrailer">
        <h1 id={toggle ? "TrailerMovie-name-dark" : "TrailerMovie-name-light"}>{homeTitle}</h1>
        <ReactPlayer
          className="player-content"
          url={videoURL}
          controls={true}
          width={"1000px"}
          height={"700px"}
          muted={false}
        />
      </div>
    </Fragment>
  );
}

export default HomeTrailer;