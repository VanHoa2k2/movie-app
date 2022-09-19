import React, { useContext } from "react";
import bg from "./footer-bg.jpg";
import "../styles/Footer.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Container } from "./Navbar";

const Footer = () => {
  const { toggle } = useContext(Container);
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <NavLink className="footer__content__element" to="/">
              <h1 id={toggle ? "" : "heading"}>HOAFLIX</h1>
            </NavLink>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <NavLink className="footer__content__element" to="/">
              <span>Home</span>
            </NavLink>
            <NavLink className="footer__content__element"  to="/">
              <span>Contact us</span>
            </NavLink>
            <NavLink className="footer__content__element"  to="/">
              <span>Team of services</span>
            </NavLink>
            <NavLink className="footer__content__element"  to="/">
              <span>About us</span>
            </NavLink>
          </div>
          <div className="footer__content__menu">
            <NavLink className="footer__content__element"  to="/">
              <span>Live</span>
            </NavLink>
            <NavLink className="footer__content__element"  to="/">
              <span>FAQ</span>
            </NavLink>
            <NavLink className="footer__content__element"  to="/">
              <span>Premium</span>
            </NavLink>
            <NavLink className="footer__content__element"  to="/">
              <span>Pravacy policy</span>
            </NavLink>
          </div>
          <div className="footer__content__menu">
            <NavLink className="footer__content__element"  to="/">
              <span>You must watch</span>
            </NavLink>
            <NavLink className="footer__content__element"  to="/">
              <span>Recent release</span>
            </NavLink>
            <NavLink className="footer__content__element"  to="/">
              <span>Top IMDB</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
