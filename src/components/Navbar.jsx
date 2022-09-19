import React, { Fragment, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trending from "./Trends";
import Pricing from "./Pricing";
import Footer from "./Footer";
import "../styles/NavBarStyle.css";
import "../responsive/NavbarRes.css";

export const Container = React.createContext();

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <Container.Provider value={{ toggle, inputValue }}>
      <Fragment>
        <nav className={toggle ? "" : "navBarColor"} id="wrapper">
          <div className="wrapper-heading">
            <GiHamburgerMenu
              fontSize={26}
              id={toggle ? "" : "heading"}
              className="appear-on-mobile-tablet Menu"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
  
            {toggleMenu && <div className="menu-mobile-tablet appear-on-mobile-tablet">
              <NavLink
                className="menu-item"
                to="/"
                style={({ isActive }) => {
                  return { color: isActive ? "#FF1493" : "#EE9B00" };
                }}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <span id={toggle ? "Movies" : "MoviesLight"}>home</span>
              </NavLink>
  
              <NavLink
                className="menu-item"
                to="/Movies"
                style={({ isActive }) => {
                  return { color: isActive ? "#FF1493" : "#EE9B00" };
                }}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <span id={toggle ? "Movies" : "MoviesLight"}>movies</span>
              </NavLink>
  
              <NavLink
                className="menu-item"
                to="/TvShows"
                style={({ isActive }) => {
                  return { color: isActive ? "#FF1493" : "#EE9B00" };
                }}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <span id={toggle ? "Movies" : "MoviesLight"}>Tv shows</span>
              </NavLink>
  
              <NavLink
                className="menu-item"
                to="/Trending"
                style={({ isActive }) => {
                  return { color: isActive ? "#FF1493" : "#EE9B00" };
                }}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <span id={toggle ? "Movies" : "MoviesLight"}>Trending</span>
              </NavLink>
  
              <NavLink
                className="menu-item"
                to="/Pricing"
                style={({ isActive }) => {
                  return { color: isActive ? "#FF1493" : "#EE9B00" };
                }}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
              </NavLink>
            </div>}
  
            <div className="nav-options">
              <NavLink to="/">
                <h1 id={toggle ? "" : "heading"} className="logo-app">
                  HOAFLIX
                </h1>
              </NavLink>
  
              <div className="hide-on-mobile-tablet">
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return { color: isActive ? "#FF1493" : "#EE9B00" };
                  }}
                >
                  <span id={toggle ? "Movies" : "MoviesLight"}>home</span>
                </NavLink>
  
                <NavLink
                  to="/Movies"
                  style={({ isActive }) => {
                    return { color: isActive ? "#FF1493" : "#EE9B00" };
                  }}
                >
                  <span id={toggle ? "Movies" : "MoviesLight"}>movies</span>
                </NavLink>
  
                <NavLink
                  to="/TvShows"
                  style={({ isActive }) => {
                    return { color: isActive ? "#FF1493" : "#EE9B00" };
                  }}
                >
                  <span id={toggle ? "Movies" : "MoviesLight"}>Tv shows</span>
                </NavLink>
  
                <NavLink
                  to="/Trending"
                  style={({ isActive }) => {
                    return { color: isActive ? "#FF1493" : "#EE9B00" };
                  }}
                >
                  <span id={toggle ? "Movies" : "MoviesLight"}>Trending</span>
                </NavLink>
  
                <NavLink
                  to="/Pricing"
                  style={({ isActive }) => {
                    return { color: isActive ? "#FF1493" : "#EE9B00" };
                  }}
                >
                  <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
                </NavLink>
              </div>
            </div>
          
          <div className="input-group">
            <input
              className="hide-on-mobile-tablet"
              type="text"
              placeholder="Search Whatever You Want"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <HiSearch
              fontSize={21}
              color="black"
              id="search"
              className="hide-on-mobile-tablet"
            />
            <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
              <div
                id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}
              ></div>
            </div>
          </div>
          </div>

          <div className="input-group appear-on-mobile-tablet">
            <input
              className="search-mobile"
              type="text"
              placeholder="Search Whatever You Want"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <HiSearch
              fontSize={21}
              color="black"
              id="search"
              className=""
            />
          </div>
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="TvShows" element={<TvShows />} />
          <Route path="Trending" element={<Trending />} />
          <Route path="Pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </Fragment>
    </Container.Provider>
  );
};

export default Navbar;
