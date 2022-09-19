import React, { Fragment, useContext } from "react";
import { Container } from "./Navbar";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import "../styles/Pricing.css";
import "../responsive/PricingRes.css"

const Pricing = () => {
  const { toggle } = useContext(Container);
  const [toggleBasic, setToggleBasic] = useState(true);
  const [toggleStandard, setToggleStandard] = useState(true);
  const [togglePrenium, setTogglePrenium] = useState(true);

  const [basicCost, setBasicCost] = useState("7.99");
  const [standardCost, setStandardCost] = useState("12.99");
  const [preniumCost, setPreniumCost] = useState("18.99");
  return (
    <Fragment>
      <div
        className={
          toggle ? "background-Color-Main" : "background-Color-secondary"
        }
      >
        <div className="Pricing-container">
          <div className={toggle ? "Pricing-option1" : "light-Theme1"}>
            <h2>Basic</h2>
            <div className="Price">
              <h3>{basicCost}$</h3>
              <h4>{toggleBasic ? "/Monthly" : "/Yearly"}</h4>
            </div>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Ulimited
              films and tv Programmes
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Watch on
              mobile phones and tablets
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Cancel at
              anytime
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>First
              month completely free
            </span>
            <div className="button-wrap"><button id="button1">Buy Now</button></div>
            <div
              className="Pricing-yearly-darktheme"
              onClick={() => {
                setToggleBasic(!toggleBasic);
                if (toggleBasic) {
                  setBasicCost("60");
                } else {
                  setBasicCost("7.99");
                }
              }}
            >
              <div
                className={
                  toggleBasic
                    ? "Pricing-monthly-darktheme"
                    : "Pricing-monthly-light"
                }
              ></div>
            </div>
          </div>

          <div className={toggle ? "Pricing-option2" : "light-Theme2"}>
            <h2>Standard</h2>
            <div className="Price">
              <h3>{standardCost}$</h3>
              <h4>{toggleStandard ? "/Monthly" : "/Yearly"}</h4>
            </div>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Ulimited
              films and tv Programmes
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Watch on
              mobile phones and tablets
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Cancel at
              anytime
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>First
              month completely free
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>HD
              available
            </span>
            <div className="button-wrap"><button id="button2">Buy Now</button></div>
            <div
              className="Pricing-yearly-darktheme"
              onClick={() => {
                setToggleStandard(!toggleStandard);
                if (toggleStandard) {
                  setStandardCost("120");
                } else {
                  setStandardCost("12.99");
                }
              }}
            >
              <div
                className={
                  toggleStandard
                    ? "Pricing-monthly-darktheme"
                    : "Pricing-monthly-light"
                }
              ></div>
            </div>
          </div>

          <div className={toggle ? "Pricing-option3" : "light-Theme3"}>
            <h2>Premium</h2>
            <div className="Price">
              <h3>{preniumCost}$</h3>
              <h4>{togglePrenium ? "/Monthly" : "/Yearly"}</h4>
            </div>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Ulimited
              films and tv Programmes
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Watch on
              mobile phones and tablets
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Cancel at
              anytime
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>First
              month completely free
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>HD available
            </span>
            <span>
              <FcCheckmark fontSize={25} id="checkmark"></FcCheckmark>Ultra HD
            </span>
            <button id="button3">Buy Now</button>
            <div
              className="Pricing-yearly-darktheme"
              onClick={() => {
                setTogglePrenium(!togglePrenium);
                if (togglePrenium) {
                  setPreniumCost("180");
                } else {
                  setPreniumCost("18.99");
                }
              }}
            >
              <div
                className={
                  togglePrenium
                    ? "Pricing-monthly-darktheme"
                    : "Pricing-monthly-light"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;
