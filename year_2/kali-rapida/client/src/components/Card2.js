import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Card = ({ repas, imgSrc, updateRepas }) => {
  const [qtt, setQtt] = useState(1);

  const addRepas = () => {
    let temp = { ...repas, QTT: qtt };
    updateRepas(temp);
    let cb = document.getElementById("commande-box");
    cb.className = "card";
  };

  const getQtt = (e) => {
    setQtt(parseInt(e.target.value));
  };

  return (
    <div className="card2 card">
      <img src={imgSrc} className="card-img" />
      <div className="card-desc">
        <div>
          <h4>{repas.NOM_REPAS}</h4>
          <p className="pu">{repas.PU}</p>
        </div>
        <div className="btn-action-box">
          <input
            type="number"
            name="qtt"
            className="qtt"
            placeholder="Qtt"
            onChange={(e) => {
              getQtt(e);
            }}
          />
          <button onClick={addRepas} className="btn">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
