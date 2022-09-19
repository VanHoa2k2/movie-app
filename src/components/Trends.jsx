import axios from 'axios';
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';
import { Container } from './Navbar';
import noImg from "./NoImage.jpg";
import "../styles/Video.css";
import TrailerTrending from "../Trailers/TrailerTrending";

const Trends = () => {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;

  const [trendArray, setTrendArray] = useState([])
  const [trailer, setTrailer] = useState(true);
  const [trendTitle, setTrendTitle] = useState("");

  const show = input ? "search" : "discover";

  const Api = "https://api.themoviedb.org/3";
  const trendsShown = '/trending/all/week'
  const Images = "https://image.tmdb.org/t/p/w500";

  const Trends = async () => {
    const data = await axios.get(`${Api}${trendsShown}`, {
      params: {
        api_key: "487be97b67b3685b6a1fc351c3469dd4",
        query: input,
      },
    });
    console.log(data)
    const results = data.data.results;
    setTrendArray(results);
  };

  useEffect(() => {
    setTimeout(() => {
      Trends();
    })
  }, [input]);

  const TrendTitle = (trend) => {
    setTrendTitle(trend.title || trend.name);
    setTrailer(!trailer);
  }

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {trendArray.map((trend) => (
            <Fragment key={trend.id}>
              <div id={trailer ? "container" : "NoContainer"}>
                <AiFillPlayCircle
                  color="#fff"
                  fontSize={40}
                  id={trailer ? "playIcon" : "hide"}
                  onClick={() => TrendTitle(trend)}
                />
                <img
                  src={
                    trend.poster_path ? `${Images}${trend.poster_path}` : noImg
                  }
                  alt=""
                  onClick={() => TrendTitle(trend)}
                />
                <h3
                  id="smaller-Text"
                  className={toggle ? "mainColor" : "secondaryColor"}
                  onClick={() => TrendTitle(trend)}
                >
                  {trend.title || trend.name}
                </h3>
              </div>
            </Fragment>
          ))}
          {trailer ? console.log : <TrailerTrending trendTitle={trendTitle} toggle={toggle}/>}
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
  )
}

export default Trends