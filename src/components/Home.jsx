import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noImg from "./NoImage.jpg";
import "../styles/Home.css";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./Navbar";
import HomeTrailer from "../Trailers/HomeTrailer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import "../styles/HomeVideo.css";
import "../responsive/HomeRes.css"

const Home = () => {
  const Api = `https://api.themoviedb.org/3/movie/popular`;

  const [backdropMovies, setBackdropMovies] = useState([]);

  const getMovies = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "487be97b67b3685b6a1fc351c3469dd4",
      },
    });
    const results = data.data.results;
    setBackdropMovies(results.slice(1, 6));
  };

  useEffect(() => {
    setTimeout(() => {
      getMovies();
    }, 100);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    speed: 300,
    cssEase: "linear",
    nextArrow: <SampleNextArrow/>,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon icon={faCircleArrowRight} 
        className={className}
        style={{ ...style, }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="hero-slide">
      <Slider {...settings}>
        {backdropMovies.map((backdrop) => (
          <SlideItem item={backdrop} />
        ))}
      </Slider>
    </div>
  );
};

export const HeroSlide = React.createContext();
const SlideItem = (props) => {
  const Images = "https://image.tmdb.org/t/p/original";
  const ImagesW500 = "https://image.tmdb.org/t/p/w500";

  const item = props.item;
  const background = item.backdrop_path
    ? `${Images}${item.backdrop_path}`
    : noImg;

  const poster = item.poster_path ? `${ImagesW500}${item.poster_path}` : noImg;

  const { toggle, inputValue } = useContext(Container);

  const [trailer, setTrailer] = useState(true);
  const [homeTitle, setHomeTitle] = useState("");

  const HomeTitle = (title) => {
    setHomeTitle(title.title);
    setTrailer(!trailer);
  };

  return (
    <div
      className={`hero-slide__item`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <button className="btn btn-outline" onClick={() => HomeTitle(item)}>
              Watch trailer
            </button>
          </div>
        </div>

        <div className="hero-slide__item__content__poster hide-on-mobile-tablet">
          <img src={poster} alt="" />
        </div>
      </div>

      {trailer ? (
        console.log
      ) : (
        <HomeTrailer homeTitle={homeTitle} toggle={toggle} />
      )}
      <AiOutlineClose
        id={trailer ? "Nothing" : "ExitTrailer"}
        className={toggle ? "DarkTheme" : "LightThemeClose"}
        fontSize={55}
        cursor={"pointer"}
        onClick={() => setTrailer(true)}
      />
    </div>
  );
};

export default Home;
