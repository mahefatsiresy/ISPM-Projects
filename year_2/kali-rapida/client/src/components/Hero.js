import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="headings">
        <h1 className="main-heading">
          RAIM SY VALO <br />
          DIA MINANA
        </h1>
        <p className="main-desc">
          Nous livrons vos commandes dans votre classe pendant les heures de
          pause.
        </p>
        <button className="btn call-to-action">
          Commander maintenant
          <div className="arrow-container">
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
